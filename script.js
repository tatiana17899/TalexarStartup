
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

function abrirBot() {
  if (window.botpress) {
    try { window.botpress.open(); return; } catch(e) {}
  }
  // Si aún no cargó, busca el botón flotante de Botpress
  const fab = document.querySelector('[class*="bpFab"], [class*="bp-widget"], [id*="bp-web-widget"]');
  if (fab) { fab.click(); return; }
  // Último intento con delay
  setTimeout(function() {
    if (window.botpress) window.botpress.open();
  }, 1500);
}
