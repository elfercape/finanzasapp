// Validación simple de credenciales para el login
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const rut = document.getElementById('rut').value.trim();
    const pass = document.getElementById('password').value.trim();

    const validRut = '12345678-9';
    const validPass = '123456';

    if (rut === validRut && pass === validPass) {
      window.location.href = 'home.html';
    } else {
      alert('Credenciales inválidas. Usa RUT 12345678-9 y CONTRASEÑA 123456.');
    }
  });
});
