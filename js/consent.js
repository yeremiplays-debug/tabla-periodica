// ==================== GESTIÓN DE CONSENTIMIENTO DE COOKIES (GDPR) ====================
// Nota: esto es una implementación básica y funcional. Para cumplimiento legal
// completo en la UE (y con los requisitos de "consentimiento" de Google para
// anuncios personalizados), se recomienda usar una plataforma CMP certificada
// por Google (por ejemplo, alguna de la lista: https://support.google.com/adsense/answer/13554116),
// especialmente si vas a recibir tráfico desde el Espacio Económico Europeo.

const CONSENT_KEY = 'cookie_consent_v1';

function getConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY));
  } catch (e) {
    return null;
  }
}

function setConsent(consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

function loadAds() {
  // Solo empuja anuncios si el usuario ha dado consentimiento y adsbygoogle existe
  if (window.adsbygoogle) {
    document.querySelectorAll('.adsbygoogle').forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }
}

function applyConsent(consent) {
  if (consent && consent.ads) {
    loadAds();
  } else {
    // Oculta visualmente los huecos de anuncio si no hay consentimiento,
    // para no dejar cajas vacías con el texto "Publicidad" sin motivo.
    document.querySelectorAll('.ad-slot').forEach(slot => {
      slot.style.display = 'none';
    });
  }
}

function hideBanner() {
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.setAttribute('hidden', '');
}

function showBanner() {
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.removeAttribute('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const existing = getConsent();

  if (existing) {
    hideBanner();
    applyConsent(existing);
  } else {
    showBanner();
  }

  const acceptBtn = document.getElementById('cookieAcceptBtn');
  const rejectBtn = document.getElementById('cookieRejectBtn');
  const settingsBtn = document.getElementById('cookieSettingsBtn');
  const savePrefsBtn = document.getElementById('cookieSavePrefsBtn');
  const settingsPanel = document.getElementById('cookieSettingsPanel');
  const adsCheckbox = document.getElementById('adsConsentCheckbox');

  if (acceptBtn) acceptBtn.addEventListener('click', () => {
    const consent = { necessary: true, ads: true, date: new Date().toISOString() };
    setConsent(consent);
    hideBanner();
    applyConsent(consent);
  });

  if (rejectBtn) rejectBtn.addEventListener('click', () => {
    const consent = { necessary: true, ads: false, date: new Date().toISOString() };
    setConsent(consent);
    hideBanner();
    applyConsent(consent);
  });

  if (settingsBtn) settingsBtn.addEventListener('click', () => {
    if (settingsPanel) settingsPanel.removeAttribute('hidden');
  });

  if (savePrefsBtn) savePrefsBtn.addEventListener('click', () => {
    const consent = { necessary: true, ads: !!(adsCheckbox && adsCheckbox.checked), date: new Date().toISOString() };
    setConsent(consent);
    if (settingsPanel) settingsPanel.setAttribute('hidden', '');
    hideBanner();
    applyConsent(consent);
  });
});
