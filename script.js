const siteActions = {
  assessment: {
    text: 'Book Attic Assessment',
    href: '#contacts',
  },
  call: {
    text: 'Call (206) 530-0018',
    href: 'tel:+12065300018',
  },
  phoneShort: {
    text: '(206) 530-0018',
    href: 'tel:+12065300018',
  },
  phoneLong: {
    text: '+1 (206) 530-00-18',
    href: 'tel:+12065300018',
  },
  email: {
    text: '2065300018wa@gmail.com',
    href: 'mailto:2065300018wa@gmail.com',
  },
};

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
  ['icon-01-wa-general-contractor.png', 'Washington State General Contractor', 'Lic. <a class="license-link" href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=604679265&LIC=HMPROL*792CH&SAW=" target="_blank" rel="noopener">#HMPROL*792CH</a>. Bonded and insured.'],
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

const reviewItems = [
  {
    name: 'Lauri J.',
    source: 'Thumbtack',
    service: 'Fan Installation',
    text: 'Michael and Maria run a tight ship. Maria worked with me to find the best time, Michael showed up on time, had good recommendations, installed our new exhaust fan, walked me through it, and kept our home clean.',
  },
  {
    name: 'Art H.',
    source: 'Thumbtack',
    service: 'Handyman / Bathroom',
    text: 'At every turn, expert solutions to challenges were found and executed beautifully. The result was spectacular, and the team came through for us on a tight deadline.',
  },
  {
    name: 'Zoe Z.',
    source: 'Thumbtack',
    service: 'Fan Installation',
    text: 'Michael nailed the mission impossible: a fresh range hood installation. He did exactly what he said, worked late to finish perfectly, left the area clean, and Maria made the process seamless.',
  },
  {
    name: 'Patty B.',
    source: 'Thumbtack',
    service: 'Lighting Installation',
    text: 'Michael was quick to install two light fixtures, including a large chandelier on a 12 foot ceiling. They look beautiful, work great, and the area was very clean after.',
  }
];

const faqs = [
  ['Why is your attic insulation price higher than basic $2.50/sq ft insulation?', 'Because the scope is different. Basic crews usually add insulation. HM-PRO measures leakage, identifies problem areas, seals key penetrations, corrects attic issues included in the scope, insulates, and verifies the result.'],
  ['How long does the work take?', 'Most standard projects take 1-3 days. Larger or premium projects can take 2-4 days depending on access, contamination, ventilation, ductwork, and selected upgrades.'],
  ['Do I need to leave the house?', 'Usually no. Most work is performed from the attic. We confirm access, dust control, and schedule details before work begins.'],
  ['Are rebates available?', 'Utility and state rebate programs change. We can help identify available PSE, Snohomish PUD, or Washington energy rebate options and provide documentation when applicable.'],
  ['What cities do you serve?', 'Seattle, Bellevue, Redmond, Sammamish, Kirkland, Mercer Island, Woodinville, Issaquah, Bothell, Monroe, Snohomish, Mill Creek, and nearby King County/Snohomish County communities.']
];

function applySiteActions() {
  const ctaMap = {
    assessment: siteActions.assessment,
    call: siteActions.call,
  };

  document.querySelectorAll('[data-cta]').forEach((link) => {
    const action = ctaMap[link.dataset.cta];
    if (!action) return;
    link.href = action.href;
    link.textContent = action.text;
  });

  const contactMap = {
    'phone-short': siteActions.phoneShort,
    'phone-long': siteActions.phoneLong,
    email: siteActions.email,
  };

  document.querySelectorAll('[data-contact]').forEach((link) => {
    const action = contactMap[link.dataset.contact];
    if (!action) return;
    link.href = action.href;
    link.textContent = action.text;
  });
}

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

  document.querySelectorAll('[data-menu-close]').forEach((item) => {
    item.addEventListener('click', () => setOpen(false));
  });

  document.querySelectorAll('.menu-links a, .menu-footer .btn[data-cta="assessment"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) {
        setOpen(false);
        return;
      }

      event.preventDefault();
      setOpen(false);
      jumpToSection(target);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

function jumpToSection(target) {
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo(0, targetTop);
  history.pushState(null, '', `#${target.id}`);
}

function renderCards(containerId, items, className) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(([icon, title, text]) => `
    <article class="${className}">
      <img loading="lazy" decoding="async" src="./assets/icons/${icon}" alt="">
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

function renderReviews() {
  const container = document.getElementById('reviewGrid');
  if (!container) return;

  container.innerHTML = reviewItems.map((review) => `
    <article class="review-card">
      <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <p>${review.text}</p>
      <div class="review-meta">
        <strong>${review.name}</strong>
        <span>${review.service} · ${review.source}</span>
      </div>
    </article>
  `).join('');
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

applySiteActions();
initMenu();
renderCards('includedGrid', includedItems, 'service-card');
renderCards('credentialsGrid', credentialItems, 'credential-card');
renderList('compareLeft', compareLeft);
renderList('compareRight', compareRight);
renderReviews();
renderFaq();
initGalleries();
