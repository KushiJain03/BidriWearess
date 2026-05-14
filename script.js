/* ══════════════════════════════════
   AURA BIDRI — script.js
══════════════════════════════════ */

// ── PRODUCT DATA ──────────────────────────────────────────
const products = {
  cuff: {
    img: 'images/The_Eclipse_Cliff.png',
    eyebrow: 'Bidriware · Black Alloy & Pure Silver',
    title: 'The NOIR MELT FRAME',
    desc: 'A bold statement piece featuring intricate silver inlay work on a matte black alloy base. The Eclipse Cuff embodies the timeless artistry of traditional Bidriware craftsmanship.',
    story: 'Inspired by the celestial dance of sun and moon, this cuff celebrates the interplay of light and shadow. Each piece is handcrafted by master artisans in Karnataka, preserving a 600-year-old tradition.',
    for: ['Evening Events', 'Art Gallery Openings', 'Cocktail Parties', 'Statement Styling']
  },
  earrings: {
    img: 'images/Lunar_Drops.png',
    eyebrow: 'Bidriware · Black Alloy & Pure Silver',
    title: 'Lunar Drops',
    desc: 'Delicate teardrop earrings adorned with hand-carved floral motifs. Each pair is individually crafted — no two are identical — making every piece truly one of a kind.',
    story: 'The Lunar Drops draw inspiration from moonlit gardens — intricate blossoms suspended in the dark sky. Artisans spend up to three days on a single pair, ensuring every petal is perfection.',
    for: ['Date Nights', 'Festive Occasions', 'Wedding Season', 'Everyday Elegance']
  },
  ring: {
    img: 'images/Obsidian_Signet.png',
    eyebrow: 'Bidriware · Black Alloy & Pure Silver',
    title: 'Obsidian Signet',
    desc: 'A wide-band signet ring featuring dense arabesque inlay in pure silver. Substantial in feel, singular in presence — a piece designed to become a signature.',
    story: 'Rooted in the Mughal aesthetic that originally inspired Bidriware, the Obsidian Signet carries centuries of courtly influence. Worn as a mark of distinction across cultures and eras.',
    for: ['Power Dressing', 'Board Meetings', 'Cultural Events', 'Collector\'s Piece']
  },
  necklace: {
    img: 'images/The_Eclipse_Cliff.png',
    eyebrow: 'Bidriware · Black Alloy & Pure Silver',
    title: 'The Shadow Choker',
    desc: 'A structured multi-strand choker that commands attention. Geometric silver channels run across the matte black base in a precise, architectural pattern.',
    story: 'The Shadow Choker was conceived to dress the neckline like architecture — bold, intentional, and geometric. It references the lattice windows of Bidar\'s ancient fort.',
    for: ['Red Carpet', 'Editorial Shoots', 'Art Openings', 'Statement Evenings']
  },
  pendant: {
    img: 'images/Lunar_Drops.png',
    eyebrow: 'Bidriware · Black Alloy & Pure Silver',
    title: 'Zenith Pendant',
    desc: 'A single suspended medallion with radial silver inlay, hung on a fine oxidised silver chain. Quiet power in a single piece.',
    story: 'The Zenith Pendant captures the idea of a singular point — a compass needle stilled. Its radial motif has been used in Bidriware for centuries as a symbol of completeness.',
    for: ['Everyday Wear', 'Office to Evening', 'Gifting', 'Layering Pieces']
  },
  studs: {
    img: 'images/Obsidian_Signet.png',
    eyebrow: 'Bidriware · Black Alloy & Pure Silver',
    title: 'Dusk Studs',
    desc: 'Small, perfectly formed square studs with micro-inlay detail. The subtlest entry into the world of Bidriware — and often the most beloved.',
    story: 'Not every statement needs volume. The Dusk Studs prove that restraint can be its own form of luxury. Tiny canvases for the finest inlay work our artisans produce.',
    for: ['Daily Wear', 'Minimalist Styling', 'First Bidri Piece', 'Gifting']
  }
};

// ── STATE ─────────────────────────────────────────────────
let currentPage  = 'home';
let previousPage = 'collection';

// ── NAVIGATION ────────────────────────────────────────────
function showPage(page) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  // nav active state
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDetail(productKey) {
  previousPage = currentPage;
  const p = products[productKey];
  if (!p) return;

  // populate
  const img = document.getElementById('detail-img');
  img.src = p.img;
  img.alt = p.title;
  img.onerror = function() {
    this.style.background = '#c0bbb4';
    this.removeAttribute('src');
  };

  document.getElementById('detail-eyebrow').textContent = p.eyebrow;
  document.getElementById('detail-title').textContent   = p.title;
  document.getElementById('detail-desc').textContent    = p.desc;
  document.getElementById('detail-story').textContent   = p.story;

  const forList = document.getElementById('detail-for');
  forList.innerHTML = '';
  p.for.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    forList.appendChild(li);
  });

  // reset style tabs
  document.querySelectorAll('.style-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.style-panel').forEach(p => p.classList.remove('active'));
  document.querySelector('.style-tab')?.classList.add('active');
  document.getElementById('tab-elegant')?.classList.add('active');

  showPage('detail');
}

function goBack() {
  showPage(previousPage === 'detail' ? 'collection' : previousPage);
}

// ── STYLE TABS ────────────────────────────────────────────
function switchTab(btn, tabId) {
  document.querySelectorAll('.style-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.style-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
}

// ── CONTACT FORM ──────────────────────────────────────────
function submitForm() {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  document.getElementById('contact-form-wrap').style.display = 'none';
  const success = document.getElementById('submit-success');
  success.style.display = 'block';
  success.style.animation = 'fadeIn .5s ease';
}

// ── NAVBAR SCROLL SHADOW ──────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── LOGO CLICK ────────────────────────────────────────────
document.querySelector('.nav-logo').addEventListener('click', function(e) {
  e.preventDefault();
  showPage('home');
});
