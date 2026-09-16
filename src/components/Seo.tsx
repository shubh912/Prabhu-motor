import { useEffect } from 'react';
import { SITE, canonicalFor } from '../lib/seo';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  schemas?: Record<string, unknown>[];
};

function upsertMetaByName(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>('meta[name="' + name + '"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>('meta[property="' + property + '"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function Seo({ title, description, path, type = 'website', schemas = [] }: SeoProps) {
  const schemasKey = JSON.stringify(schemas);
  const canonical = canonicalFor(path);

  useEffect(() => {
    document.title = title;
    document.documentElement.setAttribute('lang', 'en');
    upsertMetaByName('description', description);
    upsertMetaByName('twitter:card', SITE.twitterCard);
    upsertMetaByName('twitter:title', title);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', SITE.ogImage);
    upsertMetaByProperty('og:site_name', SITE.name);
    upsertMetaByProperty('og:type', type);
    upsertMetaByProperty('og:title', title);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:url', canonical);
    upsertMetaByProperty('og:image', SITE.ogImage);
    upsertMetaByProperty('og:locale', SITE.locale);
    upsertCanonical(canonical);
    document.head.querySelectorAll('script[data-jsonld]').forEach((node) => node.remove());
    const parsed = JSON.parse(schemasKey) as Record<string, unknown>[];
    parsed.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [title, description, canonical, type, schemasKey]);

  return null;
}
