document.addEventListener("DOMContentLoaded", function () {
  // Recupera el nombre de usuario de la cookie
  const username = getCookie("username");

  // Actualiza el contenido del encabezado con el nombre de usuario
  const profileHeading = document.getElementById("profileHeading");
  profileHeading.textContent = `Perfil de: ${username}`;

  // Muestra el mensaje de bienvenida
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `¡Bienvenido de nuevo, ${username}!`;
});

// Función para obtener el valor de una cookie por nombre
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
