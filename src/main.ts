


import { links } from './links';

const DEFAULT_GTM_ID = 'GTM-5BQ5RPW2';
const DEFAULT_GA_ID = 'G-SDJ0K1Y70X';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const DATA_GTM_ATTR = 'data-gtm';
const DATA_GA_ATTR = 'data-ga';

function ensureDataLayer(): unknown[] {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  return window.dataLayer;
}

function initGoogleTagManager(gtmId: string) {
  if (!gtmId) return;
  if (document.querySelector(`script[${DATA_GTM_ATTR}]`)) return;

  const dataLayer = ensureDataLayer();
  dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  script.setAttribute(DATA_GTM_ATTR, 'true');
  document.head.appendChild(script);
}

function initGoogleAnalytics(gaId: string) {
  if (!gaId) return;
  if (!document.querySelector(`script[${DATA_GA_ATTR}]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    script.setAttribute(DATA_GA_ATTR, 'true');
    document.head.appendChild(script);
  }

  const dataLayer = ensureDataLayer();
  const gtag = (...args: unknown[]) => {
    dataLayer.push(args);
  };
  window.gtag = window.gtag || gtag;
  window.gtag('js', new Date());
  window.gtag('config', gaId, { anonymize_ip: true });
}

function initAnalytics() {
  initGoogleTagManager(DEFAULT_GTM_ID);
  initGoogleAnalytics(DEFAULT_GA_ID);
}


function renderLinks() {
  const container = document.getElementById('links-container');
  if (!container) return;
  container.innerHTML = '';
  // Use a document fragment for batch DOM updates
  const frag = document.createDocumentFragment();
  links.forEach((link, i) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer external';
    a.referrerPolicy = 'no-referrer-when-downgrade';
    a.setAttribute('aria-label', `${link.name} - ${link.description}`);
    a.setAttribute('tabindex', '0');
    a.className = `group flex items-center gap-3 px-5 py-3 rounded-xl shadow border transition-all duration-500 opacity-0 translate-y-8 animate-slideup ${link.colorClass || ''} ${link.hoverClass || ''}`;
    a.style.animationDelay = link.delay || (0.1 + i * 0.15) + 's';
    a.innerHTML = `
      <span class="text-2xl" aria-hidden="true">${link.icon}</span>
      <div class="flex-1 min-w-0">
        <div class="font-semibold truncate">${link.name}</div>
        <div class="text-xs text-gray-500 truncate">${link.description}</div>
      </div>
      <span class="ml-auto text-lg" aria-hidden="true">→</span>
    `;
    frag.appendChild(a);
  });
  container.appendChild(frag);
}

window.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
  renderLinks();
  // Animate fade-in for all fade-in elements
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    (el as HTMLElement).style.opacity = '0';
    setTimeout(() => {
      (el as HTMLElement).style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
      (el as HTMLElement).style.opacity = '1';
    }, 200 + i * 120);
  });
  // Animate links
  document.querySelectorAll('.animate-slideup').forEach((el, i) => {
    el.classList.remove('animate-slideup');
    el.classList.add('animate-[slideup_0.7s_cubic-bezier(0.4,0,0.2,1)_forwards]');
    const delay = (el as HTMLElement).style.animationDelay || (0.1 + i * 0.15) + 's';
    (el as HTMLElement).style.animationDelay = delay;
  });
});
