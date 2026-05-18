
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu  = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    iconMenu.style.display  = open ? 'none'  : 'block';
    iconClose.style.display = open ? 'block' : 'none';
  });

  function closeMobile() {
    mobileMenu.classList.remove('open');
    iconMenu.style.display  = 'block';
    iconClose.style.display = 'none';
  }

  // Smooth scroll offset for fixed navbar
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

window.addEventListener('load', function() {
  if (window.botpress) {
    window.botpress.init({
      botId: "cf4a1767-a37f-4aad-8e82-fbc09fe9d72b",
      configuration: {
        botName: "Talexar",
        botDescription: "Asistente virtual 24/7",
        color: "#0d6dee",
        themeMode: "light",
      }
    });
  }
});

function abrirBot() {
  if (window.botpress) {
    try { window.botpress.open(); return; } catch(e) {}
  }
  const fab = document.querySelector('[class*="bpFab"], [class*="bp-widget"], [id*="bp-web-widget"]');
  if (fab) { fab.click(); return; }
  setTimeout(function() {
    if (window.botpress) window.botpress.open();
  }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btnChat');
  if (btn) {
    btn.addEventListener('click', abrirBot);
  }
});
