


import { links } from './links';


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
    a.rel = 'noopener noreferrer';
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
