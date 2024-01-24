// Funcionalidad del login
function login() {
  // Obtén el valor del nombre de usuario
  var username = document.getElementById("username").value;

  // Crea un token de sesión y almacénalo en sessionStorage
  var token = generateToken(username);
  sessionStorage.setItem("token", token);

  // Crea una cookie con el nombre de usuario
  createCookie("username", username, 1); // La cookie expira en 1 día

  // Redirige a la página de inicio
  window.location.href = "/perfil";
}

// Creación del token
function generateToken(username) {
  // Puedes usar cualquier lógica para generar un token único
  return btoa(username + Math.random());
}

// Creación de la cookie
function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
