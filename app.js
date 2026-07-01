  :root {
    --bg: #050a18;
    --card-bg: #0d1b2e;
    --glow: 0 0 12px;
    --c-alkali: #ff4e6a;
    --c-alkaline: #ff9a3c;
    --c-transition: #4fc3f7;
    --c-post: #81c784;
    --c-metalloid: #ce93d8;
    --c-nonmetal: #fff176;
    --c-halogen: #80deea;
    --c-noble: #ef9a9a;
    --c-lanthanide: #f48fb1;
    --c-actinide: #a5d6a7;
    --c-unknown: #90a4ae;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    font-family: 'Exo 2', sans-serif;
    color: #e0e0e0;
    min-height: 100vh;
    overflow-x: auto;
  }

  /* Stars background */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 15% 90%, rgba(255,255,255,0.2) 0%, transparent 100%),
      radial-gradient(1px 1px at 85% 5%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(2px 2px at 45% 45%, rgba(255,255,255,0.2) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 25% 75%, rgba(255,255,255,0.3) 0%, transparent 100%);
    z-index: 0;
    pointer-events: none;
  }

  header {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 28px 20px 10px;
  }

  header h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(1.4rem, 4vw, 2.6rem);
    font-weight: 900;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #4fc3f7, #ce93d8, #ff9a3c, #fff176);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 0 20px rgba(79,195,247,0.4));
  }

  header p {
    font-size: 0.85rem;
    color: #78909c;
    margin-top: 6px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* Legend */
  .legend {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.68rem;
    letter-spacing: 0.5px;
    color: #b0bec5;
  }

  .legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }

  /* Table */
  .table-wrapper {
    position: relative;
    z-index: 2;
    overflow-x: auto;
    padding: 10px 10px 20px;
  }

  .periodic-table {
    display: grid;
    grid-template-columns: repeat(18, minmax(52px, 58px));
    gap: 3px;
    width: max-content;
    margin: 0 auto;
  }

  .element {
    position: relative;
    border-radius: 6px;
    padding: 4px 3px 3px;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
    border: 1px solid rgba(255,255,255,0.07);
    background: var(--card-bg);
    text-align: center;
    min-height: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .element::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    opacity: 0.18;
    background: var(--el-color, #fff);
    transition: opacity 0.15s;
  }

  .element:hover {
    transform: scale(1.18) translateY(-3px);
    z-index: 10;
    filter: brightness(1.3);
    border-color: var(--el-color, #fff);
    box-shadow: 0 0 18px var(--el-color, #fff), 0 6px 24px rgba(0,0,0,0.5);
  }

  .element:hover::before { opacity: 0.35; }

  .el-number {
    font-size: 0.52rem;
    color: rgba(255,255,255,0.5);
    font-family: 'Orbitron', sans-serif;
    line-height: 1;
  }

  .el-symbol {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--el-color, #fff);
    line-height: 1.1;
    text-shadow: 0 0 8px var(--el-color, #fff);
  }

  .el-name {
    font-size: 0.45rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .el-mass {
    font-size: 0.42rem;
    color: rgba(255,255,255,0.35);
  }

  /* Spacer */
  .spacer { background: transparent; border: none; cursor: default; min-height: 56px; }
  .spacer::before { display: none; }
  .spacer:hover { transform: none; box-shadow: none; filter: none; }

  /* Series label */
  .series-label {
    background: transparent;
    border: none;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 4px;
    min-height: 56px;
  }
  .series-label span {
    font-size: 0.5rem;
    color: #546e7a;
    text-transform: uppercase;
    letter-spacing: 1px;
    writing-mode: horizontal-tb;
  }
  .series-label::before { display: none; }
  .series-label:hover { transform: none; box-shadow: none; filter: none; }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    z-index: 100;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .modal-overlay.active { display: flex; }

  .modal {
    background: #0a1628;
    border-radius: 16px;
    border: 2px solid var(--modal-color, #4fc3f7);
    box-shadow: 0 0 40px var(--modal-color, #4fc3f7), 0 20px 60px rgba(0,0,0,0.8);
    max-width: 560px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
    position: relative;
  }

  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.7) translateY(40px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }

  .modal-header {
    padding: 24px 24px 16px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    position: relative;
  }

  .modal-symbol-box {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    border: 2px solid var(--modal-color, #4fc3f7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: rgba(255,255,255,0.04);
    box-shadow: 0 0 20px var(--modal-color, #4fc3f7);
  }

  .modal-symbol-box .number { font-size: 0.7rem; color: rgba(255,255,255,0.5); font-family: 'Orbitron', sans-serif; }
  .modal-symbol-box .symbol { font-family: 'Orbitron', sans-serif; font-size: 2rem; font-weight: 900; color: var(--modal-color, #4fc3f7); text-shadow: 0 0 15px var(--modal-color, #4fc3f7); }
  .modal-symbol-box .mass { font-size: 0.6rem; color: rgba(255,255,255,0.4); }

  .modal-title-block { flex: 1; }
  .modal-title-block h2 { font-family: 'Orbitron', sans-serif; font-size: 1.3rem; color: var(--modal-color, #4fc3f7); letter-spacing: 2px; }
  .modal-title-block .category-badge {
    display: inline-block;
    margin-top: 6px;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.65rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: rgba(255,255,255,0.08);
    color: var(--modal-color, #4fc3f7);
    border: 1px solid var(--modal-color, #4fc3f7);
  }

  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.05);
    color: #90a4ae;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  .modal-close:hover { border-color: #ef9a9a; color: #ef9a9a; background: rgba(239,154,154,0.1); }

  .modal-img-section {
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .modal-img-section img {
    width: 200px;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
    background: #0d1b2e;
  }

  .img-placeholder {
    width: 200px;
    height: 160px;
    border-radius: 10px;
    border: 1px dashed rgba(255,255,255,0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: rgba(255,255,255,0.2);
    font-size: 0.7rem;
  }

  .img-placeholder .big { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; color: var(--modal-color, #4fc3f7); opacity: 0.4; }

  .modal-props {
    padding: 16px 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .prop-item {
    background: rgba(255,255,255,0.03);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid rgba(255,255,255,0.06);
  }

  .prop-label { font-size: 0.58rem; color: #546e7a; text-transform: uppercase; letter-spacing: 1px; }
  .prop-value { font-size: 0.82rem; color: #e0e0e0; font-weight: 600; margin-top: 2px; }

  .modal-desc {
    padding: 16px 24px 24px;
  }

  .modal-desc h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.7rem;
    color: var(--modal-color, #4fc3f7);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .modal-desc p {
    font-size: 0.82rem;
    line-height: 1.7;
    color: #b0bec5;
  }

  /* Period labels */
  .period-label {
    display: flex; align-items: center; justify-content: center;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.55rem;
    color: #37474f;
    min-height: 56px;
  }

  .gap-row { grid-column: 1 / -1; height: 6px; }
  .lanthanide-gap, .actinide-gap {
    grid-column: 3 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.45rem;
    color: #37474f;
    letter-spacing: 1px;
    min-height: 56px;
  }

  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #0a1628; }
  ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #4fc3f7; }

/* ==================== LAYOUT PRINCIPAL + ANUNCIOS ==================== */
.page-layout {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr) 160px;
  gap: 12px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: start;
}

.main-content { min-width: 0; }

.ad-rail {
  position: relative;
  z-index: 2;
  display: none;
}

@media (min-width: 1100px) {
  .ad-rail { display: block; }
}

.ad-slot-sticky { position: sticky; top: 16px; }

.ad-slot {
  position: relative;
  z-index: 2;
  background: rgba(255,255,255,0.02);
  border: 1px dashed rgba(255,255,255,0.08);
  border-radius: 10px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.ad-slot-horizontal {
  margin: 16px auto;
  max-width: 728px;
  width: 100%;
}

.ad-label {
  font-size: 0.55rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #546e7a;
  margin-bottom: 4px;
}

.adsbygoogle { min-width: 120px; min-height: 60px; }

/* ==================== TEXTO SEO ==================== */
.seo-intro {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 6px auto 4px;
  padding: 0 20px;
  text-align: center;
  font-size: 0.82rem;
  line-height: 1.7;
  color: #90a4ae;
}

.seo-section {
  position: relative;
  z-index: 2;
  max-width: 820px;
  margin: 30px auto 10px;
  padding: 20px;
}

.seo-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  color: #4fc3f7;
  letter-spacing: 1px;
  margin-bottom: 16px;
  text-align: center;
}

.faq-item { margin-bottom: 16px; }
.faq-item h3 { font-size: 0.9rem; color: #e0e0e0; margin-bottom: 4px; }
.faq-item p { font-size: 0.8rem; line-height: 1.6; color: #90a4ae; }

/* ==================== FOOTER ==================== */
.site-footer {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 24px 20px 40px;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: 20px;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
}

.footer-nav a {
  font-size: 0.75rem;
  color: #78909c;
  text-decoration: none;
  letter-spacing: 0.5px;
}

.footer-nav a:hover { color: #4fc3f7; }

.site-footer p { font-size: 0.7rem; color: #546e7a; }

/* ==================== BANNER DE COOKIES ==================== */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #0a1628;
  border-top: 1px solid rgba(79,195,247,0.3);
  box-shadow: 0 -4px 24px rgba(0,0,0,0.6);
  padding: 16px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.cookie-banner[hidden] { display: none; }

.cookie-banner p {
  flex: 1 1 320px;
  font-size: 0.78rem;
  line-height: 1.6;
  color: #b0bec5;
  margin: 0;
}

.cookie-banner a { color: #4fc3f7; }

.cookie-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.cookie-btn {
  font-family: 'Exo 2', sans-serif;
  font-size: 0.78rem;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.2s;
}

.cookie-btn-primary {
  background: #4fc3f7;
  color: #050a18;
  border-color: #4fc3f7;
  font-weight: 600;
}

.cookie-btn-primary:hover { filter: brightness(1.1); }
.cookie-btn-secondary:hover { border-color: #4fc3f7; color: #4fc3f7; }

.cookie-settings-panel {
  position: fixed;
  inset: 0;
  z-index: 1001;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cookie-settings-panel[hidden] { display: none; }

.cookie-settings-box {
  background: #0a1628;
  border: 1px solid rgba(79,195,247,0.3);
  border-radius: 12px;
  padding: 24px;
  max-width: 420px;
  width: 100%;
}

.cookie-settings-box h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  color: #4fc3f7;
  margin-bottom: 16px;
}

.cookie-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: #b0bec5;
  margin-bottom: 12px;
}

/* ==================== LEGALES (páginas estáticas) ==================== */
.legal-page {
  position: relative;
  z-index: 2;
  max-width: 780px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  line-height: 1.7;
  color: #b0bec5;
  font-size: 0.9rem;
}

.legal-page h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  color: #4fc3f7;
  margin-bottom: 8px;
}

.legal-page .updated { font-size: 0.75rem; color: #546e7a; margin-bottom: 30px; }
.legal-page h2 { font-size: 1.05rem; color: #e0e0e0; margin: 28px 0 10px; }
.legal-page p, .legal-page li { margin-bottom: 10px; }
.legal-page ul { padding-left: 20px; }
.legal-page a { color: #4fc3f7; }
.legal-page .back-link { display: inline-block; margin-bottom: 24px; font-size: 0.8rem; color: #78909c; text-decoration: none; }
.legal-page .back-link:hover { color: #4fc3f7; }
