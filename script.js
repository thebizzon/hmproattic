const includedItems = [
  ['icon-01-blower-door-thermal-test.png', 'Blower Door & Thermal Test', 'Pre-work diagnostic testing measures air leakage and helps identify hidden leak points.'],
  ['icon-02-old-insulation-removal.png', 'Old Insulation Removal', 'Settled, damaged, or contaminated insulation is removed before new work begins when required by the project scope.'],
  ['icon-03-air-sealing.png', 'Air Sealing', 'Gaps and penetrations are sealed with appropriate sealants and fire-rated materials around key leakage points.'],
  ['icon-04-recessed-light-covers.png', 'Recessed Light Covers', 'IC-rated covers help separate fixtures from insulation and reduce leakage paths.'],
  ['icon-05-soffit-baffles.png', 'Soffit Baffles', 'Baffles protect soffit-to-ridge airflow, which is important for Pacific Northwest moisture control.'],
  ['icon-06-ductwork-corrections.png', 'Ductwork Corrections', 'Damaged or disconnected attic ducting can be corrected so conditioned air reaches the room, not the attic.'],
  ['icon-07-blown-in-insulation.png', 'Blown-In Insulation', 'New attic insulation is installed after sealing work, targeting proper performance for the home.'],
  ['icon-08-post-work-verification.png', 'Post-Work Verification', 'A follow-up blower door test documents the improvement instead of asking you to trust a guess.']
];

const credentialItems = [
  ['icon-01-wa-general-contractor.png', 'Washington State General Contractor', 'Lic. #HMPROL*792CH. Bonded and insured.'],
  ['icon-02-bpi-building-science-training.png', 'BPI Building Science Training', 'Building science methodology for understanding how homes perform as systems.'],
  ['icon-03-retrotec-blower-door-operation.png', 'Retrotec Blower Door Operation', 'Professional equipment operation for measured air leakage testing.'],
  ['icon-04-five-star-reputation.png', 'Five-Star Reputation', 'Use current Google/Thumbtack counts only after final confirmation.']
];

const compareLeft = [
  'No blower door test before quoting',
  'No thermal imaging to find leaks',
  'Blows R-49 over existing problems',
  'Air sealing skipped or token-only',
  'Ductwork left disconnected or leaking',
  'Bath fans still venting into attic',
  'No verification test after work',
  '"Trust us, it\'ll be better"'
];

const compareRight = [
  'Blower door test before any work',
  'Fluke thermal imaging during depressurization',
  'Air sealing with PROSOCO + fire-rated foam',
  'Ductwork replaced with new insulated flex',
  'Bath fans properly vented through roof',
  'Post-work blower door re-test',
  'Written rCloud QA report',
  'Licensed GC: we understand the whole house'
];

const faqs = [
  ['Why is your attic insulation price higher than basic $2.50/sq ft insulation?', 'Because the scope is different. Basic crews usually add insulation. HM-PRO measures leakage, identifies problem areas, seals key penetrations, corrects attic issues included in the scope, insulates, and verifies the result.'],
  ['How long does the work take?', 'Most standard projects take 1-3 days. Larger or premium projects can take 2-4 days depending on access, contamination, ventilation, ductwork, and selected upgrades.'],
  ['Do I need to leave the house?', 'Usually no. Most work is performed from the attic. We confirm access, dust control, and schedule details before work begins.'],
  ['Are rebates available?', 'Utility and state rebate programs change. We can help identify available PSE, Snohomish PUD, or Washington energy rebate options and provide documentation when applicable.'],
  ['What cities do you serve?', 'Seattle, Bellevue, Redmond, Sammamish, Kirkland, Mercer Island, Woodinville, Issaquah, Bothell, Monroe, Snohomish, Mill Creek, and nearby King County/Snohomish County communities.']
];

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.getElementById('siteMenu');
  if (!toggle || !panel) return;

  const setOpen = (isOpen) => {
    document.body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
  };

  toggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('menu-open'));
  });

  document.querySelectorAll('[data-menu-close], .menu-links a').forEach((item) => {
    item.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

function renderCards(containerId, items, className) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(([icon, title, text]) => `
    <article class="${className}">
      <img src="./assets/icons/${icon}" alt="">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join('');
}

function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderFaq() {
  const container = document.getElementById('faqList');
  if (!container) return;
  container.innerHTML = faqs.map(([q, a]) => `
    <article class="faq-item">
      <button class="faq-question" type="button"><span>${q}</span><span>+</span></button>
      <div class="faq-answer">${a}</div>
    </article>
  `).join('');

  container.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      item.classList.toggle('open');
      button.querySelector('span:last-child').textContent = item.classList.contains('open') ? '-' : '+';
    });
  });
}

function initGalleries() {
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImage = document.querySelector('[data-lightbox-image]');
  let lastFocused = null;

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastFocused) lastFocused.focus();
  };

  const openLightbox = (src, alt, trigger) => {
    if (!lightbox || !lightboxImage) return;
    lastFocused = trigger || document.activeElement;
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    const closeButton = lightbox.querySelector('[data-lightbox-close]');
    if (closeButton) closeButton.focus();
  };

  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const mainImage = gallery.querySelector('[data-gallery-main]');
    const openButton = gallery.querySelector('[data-gallery-open]');
    const thumbs = gallery.querySelectorAll('[data-gallery-thumb]');
    if (!mainImage || !openButton || !thumbs.length) return;

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.dataset.src;
        mainImage.alt = thumb.dataset.alt || '';
        openButton.setAttribute('aria-label', `Open ${mainImage.alt || 'photo'}`);
        thumbs.forEach((item) => item.classList.toggle('active', item === thumb));
      });
    });

    openButton.addEventListener('click', () => {
      openLightbox(mainImage.src, mainImage.alt, openButton);
    });
  });

  document.querySelectorAll('[data-lightbox-close]').forEach((button) => {
    button.addEventListener('click', closeLightbox);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}

initMenu();
renderCards('includedGrid', includedItems, 'service-card');
renderCards('credentialsGrid', credentialItems, 'credential-card');
renderList('compareLeft', compareLeft);
renderList('compareRight', compareRight);
renderFaq();
initGalleries();
