import supabase from './db-client.js';

const ALLOWED_COURSES = [
  'HMV Training',
  'LMV Training',
  'E-Rickshaw Training',
  'General Enquiry',
];

function isValidPhone(phone) {
  if (typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s-]/g, '');
  return /^(\+91|91)?[6-9]\d{9}$/.test(cleaned);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        ok: true,
        message: 'Contact enquiry endpoint. Send a POST request to submit an enquiry.',
      });
    }

    if (req.method === 'POST') {
      const { name, phone, course, message } = req.body || {};

      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: 'Please enter your full name.' });
      }
      if (!isValidPhone(phone || '')) {
        return res.status(400).json({ error: 'Please enter a valid 10-digit mobile number.' });
      }
      if (!ALLOWED_COURSES.includes(course)) {
        return res.status(400).json({ error: 'Please select a valid course.' });
      }

      const cleanMessage =
        typeof message === 'string' ? message.trim().slice(0, 1000) : '';

      const { data, error } = await supabase
        .from('contact_enquiries')
        .insert({
          name: name.trim().slice(0, 120),
          phone: String(phone).trim().slice(0, 20),
          course,
          message: cleanMessage,
          status: 'new',
        })
        .select('id, created_at')
        .single();

      if (error) throw error;
      return res.status(201).json({ ok: true, id: data.id });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Contact API error:', err);
    return res
      .status(500)
      .json({ error: 'Could not submit your enquiry. Please call us directly on 8005022800.' });
  }
}
