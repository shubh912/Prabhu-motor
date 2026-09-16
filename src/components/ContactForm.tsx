import { useEffect, useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { CircleAlert, CircleCheck, Send } from 'lucide-react';
import { BUSINESS, COURSES } from '../lib/business';

type ContactFormProps = { defaultCourse?: string; heading?: string; subheading?: string };
type FormState = { name: string; phone: string; course: string; message: string };
type FormErrors = Partial<Record<keyof FormState | 'form', string>>;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  const cleaned = values.phone.replace(/[\s-]/g, '');
  if (!/^(\+91|91)?[6-9]\d{9}$/.test(cleaned)) errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  const validCourses = COURSES.map((c) => c.value);
  if (!validCourses.includes(values.course as (typeof validCourses)[number])) errors.course = 'Please select a course.';
  if (values.message.trim().length > 500) errors.message = 'Message must be under 500 characters.';
  return errors;
}

export default function ContactForm({ defaultCourse = '', heading = 'Send an Enquiry', subheading = 'Fill in the form and the school will contact you back. For an immediate response, call the school directly.' }: ContactFormProps) {
  const [values, setValues] = useState<FormState>({ name: '', phone: '', course: defaultCourse, message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  useEffect(() => { setValues((p) => ({ ...p, course: defaultCourse })); }, [defaultCourse]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name as keyof FormState]) setErrors(validate(next));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate(values);
    setErrors(v);
    setTouched({ name: true, phone: true, course: true, message: true });
    if (Object.keys(v).length > 0) return;
    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values.name.trim(), phone: values.phone.trim(), course: values.course, message: values.message.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || 'Could not submit your enquiry. Please try again.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Could not submit your enquiry. Please call us directly.');
    }
  };

  const reset = () => {
    setValues({ name: '', phone: '', course: defaultCourse, message: '' });
    setErrors({});
    setTouched({});
    setStatus('idle');
    setServerError('');
  };

  const inputClass = (f: keyof FormState) => 'mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 ' + (errors[f] && touched[f] ? 'border-red-600' : 'border-stone-300 hover:border-stone-400');

  if (status === 'success') {
    return (
      <div role="alert" aria-live="polite" className="rounded-2xl border-2 border-green-700 bg-green-50 p-8 text-center">
        <CircleCheck className="mx-auto h-12 w-12 text-green-700" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-bold text-stone-950">Enquiry Received. Thank You!</h2>
        <p className="mx-auto mt-2 max-w-md text-base text-stone-700">Thank you, {values.name.trim() || 'friend'}. Your enquiry about <strong>{values.course}</strong> has been recorded. The school will contact you back on <strong>{values.phone.trim()}</strong>.</p>
        <p className="mx-auto mt-2 max-w-md text-[15px] text-stone-600">Need an immediate answer? Call the school directly on <a href={BUSINESS.telLink} className="font-bold text-brand-800 underline">{BUSINESS.phone}</a>.</p>
        <button type="button" onClick={reset} className="mt-6 inline-flex min-h-[48px] items-center rounded-lg border-2 border-brand-700 px-6 py-2.5 font-bold text-brand-800 hover:bg-brand-50">Send Another Enquiry</button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="font-display text-2xl font-bold text-stone-950">{heading}</h2>
      <p className="mt-1.5 text-[15px] text-stone-600">{subheading}</p>
      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div>
          <label htmlFor="enquiry-name" className="block text-[15px] font-semibold text-stone-900">Name <span className="text-brand-700" aria-hidden="true">*</span></label>
          <input id="enquiry-name" name="name" type="text" autoComplete="name" maxLength={80} placeholder="Your full name" value={values.name} onChange={handleChange} onBlur={handleBlur} required aria-required="true" aria-invalid={Boolean(errors.name && touched.name)} aria-describedby={errors.name && touched.name ? 'enquiry-name-error' : undefined} className={inputClass('name')} />
          {errors.name && touched.name && <p id="enquiry-name-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-phone" className="block text-[15px] font-semibold text-stone-900">Phone Number <span className="text-brand-700" aria-hidden="true">*</span></label>
          <input id="enquiry-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={15} placeholder="10-digit mobile number" value={values.phone} onChange={handleChange} onBlur={handleBlur} required aria-required="true" aria-invalid={Boolean(errors.phone && touched.phone)} aria-describedby={errors.phone && touched.phone ? 'enquiry-phone-error' : 'enquiry-phone-hint'} className={inputClass('phone')} />
          {errors.phone && touched.phone ? <p id="enquiry-phone-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.phone}</p> : <p id="enquiry-phone-hint" className="mt-1.5 text-sm text-stone-500">Enter your 10-digit mobile number, e.g. 98XXXXXXXX.</p>}
        </div>
        <div>
          <label htmlFor="enquiry-course" className="block text-[15px] font-semibold text-stone-900">Select Course <span className="text-brand-700" aria-hidden="true">*</span></label>
          <select id="enquiry-course" name="course" value={values.course} onChange={handleChange} onBlur={handleBlur} required aria-required="true" aria-invalid={Boolean(errors.course && touched.course)} aria-describedby={errors.course && touched.course ? 'enquiry-course-error' : undefined} className={inputClass('course')}>
            <option value="">Select a course</option>
            {COURSES.map((c) => (<option key={c.value} value={c.value}>{c.label}</option>))}
          </select>
          {errors.course && touched.course && <p id="enquiry-course-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.course}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-message" className="block text-[15px] font-semibold text-stone-900">Message <span className="font-normal text-stone-500">(optional)</span></label>
          <textarea id="enquiry-message" name="message" rows={4} maxLength={500} placeholder="Tell us about your requirement..." value={values.message} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.message && touched.message)} aria-describedby={errors.message && touched.message ? 'enquiry-message-error' : 'enquiry-message-hint'} className={inputClass('message')} />
          {errors.message && touched.message ? <p id="enquiry-message-error" role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors.message}</p> : <p id="enquiry-message-hint" className="mt-1.5 text-sm text-stone-500">Optional - up to 500 characters. {values.message.length}/500</p>}
        </div>
        {status === 'error' && (
          <div role="alert" className="flex items-start gap-2.5 rounded-lg border border-red-300 bg-red-50 p-4 text-[15px] font-medium text-red-800">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>{serverError}</p>
          </div>
        )}
        <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-7 py-3 text-base font-bold text-white shadow transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
          {status === 'sending' ? (<><span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" /> Sending...</>) : (<><Send className="h-5 w-5" aria-hidden="true" /> Submit Enquiry</>)}
        </button>
        <p className="text-sm text-stone-500">By submitting, you agree to be contacted by the school on the phone number provided.</p>
      </form>
    </div>
  );
}
