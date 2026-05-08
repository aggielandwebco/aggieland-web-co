@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --primary: #500000;
  --primary-dark: #3b0000;
  --accent: #c49a3a;
  --foreground: #141414;
  --muted: #666;
  --border: #e8e3dc;
  --card: #fbfaf8;
  --bg: #ffffff;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  color: var(--foreground);
  background: var(--bg);
}

a { color: inherit; text-decoration: none; }

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 96px 0;
}

.section.alt {
  background: var(--card);
}

.eyebrow {
  display: inline-block;
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-heading {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 56px;
}

.section-heading h2 {
  margin: 0 0 16px;
  font-size: clamp(32px, 5vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.section-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.7;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 12px;
  border: 0;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn.primary {
  background: var(--primary);
  color: white;
}

.btn.primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.btn.outline {
  background: white;
  color: var(--foreground);
  border: 2px solid rgba(20,20,20,.12);
}

.btn.outline:hover {
  border-color: rgba(20,20,20,.25);
  transform: translateY(-1px);
}

.nav {
  position: fixed;
  z-index: 50;
  inset: 0 0 auto;
  transition: 0.25s ease;
}

.nav.scrolled {
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 30px rgba(0,0,0,.06);
}

.nav-inner {
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.logo {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: var(--primary);
  color: white;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 900;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  color: var(--muted);
  font-weight: 700;
  font-size: 14px;
}

.nav-links a:hover { color: var(--foreground); }

.mobile-btn { display: none; background: transparent; border: 0; }

.mobile-menu { display: none; }

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(120deg, #fff 0%, #fff 55%, rgba(80,0,0,.05) 100%);
}

.hero::after {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  background: rgba(196,154,58,.10);
  filter: blur(55px);
  left: -140px;
  bottom: -140px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
  padding-top: 90px;
}

.hero h1 {
  font-size: clamp(42px, 7vw, 72px);
  line-height: 1.03;
  letter-spacing: -0.06em;
  margin: 0 0 24px;
}

.hero h1 span { color: var(--primary); }

.hero p {
  color: var(--muted);
  font-size: 20px;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 0 34px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 10px 14px;
  color: #333;
  font-weight: 700;
  font-size: 14px;
}

.badge svg { color: var(--primary); }

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.image-card {
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg, #500000, #c49a3a);
  box-shadow: 0 24px 70px rgba(80,0,0,.14);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-list {
  display: grid;
  gap: 20px;
}

.about-item {
  display: flex;
  gap: 15px;
}

.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(80,0,0,.07);
  display: grid;
  place-items: center;
  color: var(--primary);
  flex: 0 0 auto;
}

.about-item h4 {
  margin: 0 0 5px;
  font-size: 16px;
}

.about-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.grid {
  display: grid;
  gap: 22px;
}

.grid.three { grid-template-columns: repeat(3, 1fr); }
.grid.two { grid-template-columns: repeat(2, 1fr); }

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px;
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 60px rgba(0,0,0,.08);
  border-color: rgba(196,154,58,.5);
}

.card h3 {
  margin: 14px 0 10px;
  font-size: 20px;
}

.card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.price-card {
  padding: 34px;
  border-radius: 24px;
}

.price-card.popular {
  background: var(--primary);
  color: white;
  transform: scale(1.035);
  border: 2px solid var(--accent);
  box-shadow: 0 30px 80px rgba(80,0,0,.22);
}

.price-card h3 { margin: 0 0 10px; font-size: 23px; }
.price-card .desc { color: var(--muted); min-height: 72px; }
.price-card.popular .desc { color: rgba(255,255,255,.7); }

.price {
  margin: 20px 0 4px;
  font-size: 44px;
  font-weight: 900;
  letter-spacing: -0.05em;
}

.setup {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 24px;
}

.price-card.popular .setup { color: rgba(255,255,255,.62); }

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  gap: 12px;
}

.features li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--muted);
  font-size: 14px;
}

.price-card.popular .features li { color: rgba(255,255,255,.82); }

.features svg {
  flex: 0 0 auto;
  color: var(--primary);
}

.price-card.popular .features svg { color: var(--accent); }

.step {
  text-align: center;
}

.step-num {
  width: 56px;
  height: 56px;
  margin: 0 auto 18px;
  border-radius: 999px;
  background: var(--primary);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 20px;
}

.portfolio-card {
  padding: 0;
  overflow: hidden;
}

.mock-img {
  height: 205px;
  background: linear-gradient(135deg, rgba(80,0,0,.95), rgba(196,154,58,.85));
}

.mock-img.alt1 { background: linear-gradient(135deg, #111, #500000); }
.mock-img.alt2 { background: linear-gradient(135deg, #500000, #f4eee6); }
.mock-img.alt3 { background: linear-gradient(135deg, #0f172a, #500000); }
.mock-img.alt4 { background: linear-gradient(135deg, #3b0000, #c49a3a); }
.mock-img.alt5 { background: linear-gradient(135deg, #1f2937, #500000); }

.portfolio-card .body {
  padding: 24px;
}

.faq {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
}

.faq-item {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px;
  background: white;
}

.faq-item h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.faq-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.contact-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  max-width: 1040px;
  margin: 0 auto;
}

.form {
  background: white;
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 30px;
  display: grid;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

label {
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
}

input, textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  min-height: 48px;
  padding: 12px 14px;
  font: inherit;
}

textarea { min-height: 120px; resize: vertical; }

.info-list {
  display: grid;
  gap: 28px;
}

.info-item {
  display: flex;
  gap: 16px;
}

.info-item h4 {
  margin: 0 0 4px;
}

.info-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}

.note {
  background: rgba(80,0,0,.06);
  border-radius: 18px;
  padding: 22px;
}

.note h4 { margin: 0 0 8px; }

.footer {
  background: #111;
  color: white;
  padding: 64px 0 28px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.3fr;
  gap: 46px;
}

.footer p, .footer li, .footer a {
  color: rgba(255,255,255,.58);
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 11px;
}

.socials {
  display: flex;
  gap: 10px;
  margin-top: 22px;
}

.socials a {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255,255,255,.08);
  display: grid;
  place-items: center;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.1);
  margin-top: 42px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 13px;
}

.success {
  background: white;
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 54px 30px;
  text-align: center;
}

.success svg { color: var(--primary); }

@media (max-width: 900px) {
  .nav-links { display: none; }
  .mobile-btn { display: block; }
  .mobile-menu {
    display: grid;
    gap: 2px;
    background: white;
    border-top: 1px solid var(--border);
    padding: 16px 24px 20px;
  }
  .mobile-menu a {
    padding: 12px 0;
    font-weight: 700;
  }

  .two-col, .contact-grid, .footer-grid {
    grid-template-columns: 1fr;
  }

  .grid.three, .grid.two {
    grid-template-columns: 1fr;
  }

  .hero { min-height: auto; padding: 60px 0; }
  .hero-content { padding-top: 95px; }
  .section { padding: 72px 0; }
  .form-row { grid-template-columns: 1fr; }
  .price-card.popular { transform: none; }
  .footer-bottom { flex-direction: column; }
}
