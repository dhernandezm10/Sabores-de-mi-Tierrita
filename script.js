// 1. Desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    const destino = document.querySelector(targetId);
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 2. Animación al hacer scroll con IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

// Aplicar la observación a los elementos con la clase 'plato-card'
document.querySelectorAll('.plato-card').forEach(card => {
  card.classList.add('fade-in'); // Clase base para preparar la animación
  observer.observe(card);
});

// 3. Manejo de botones interactivos (ejemplo: Reservar por WhatsApp)
document.addEventListener('DOMContentLoaded', () => {
  const btnWhatsApp = document.querySelector('.btn-whatsapp');
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', () => {
      // Puedes agregar aquí cualquier lógica adicional antes de redirigir
      console.log('Botón de WhatsApp clickeado');
    });
  }
});
