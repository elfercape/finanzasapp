// Mensaje de confirmación al recuperar contraseña
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recovery-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('recovery-email-page').value.trim();

    if (!email) {
      alert('Por favor ingresa un correo válido.');
      return;
    }

    alert('Te enviaremos una contraseña de restauración a ' + email + '.');
    form.reset();
  });
});
