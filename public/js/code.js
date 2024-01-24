// Supongamos que tienes un array de artículos llamado 'productos'
const productos = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del Producto 1" },
    // ... más productos
  ];
  
  // Supongamos que tienes un array de comentarios llamado 'comentarios'
  const comentarios = [];
  
  // Función para realizar la búsqueda
  function searchItems() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const results = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(searchTerm) ||
        producto.descripcion.toLowerCase().includes(searchTerm)
    );
  
    // Muestra los resultados de la búsqueda (puedes ajustar esto según tu diseño)
    alert(`Resultados de la búsqueda:\n${results.map((p) => p.nombre).join("\n")}`);
  }
  
  // Función para mostrar los comentarios
  function showComments() {
    const commentsList = document.getElementById("commentsList");
    commentsList.innerHTML = "";
    comentarios.forEach((comentario) => {
      const li = document.createElement("li");
      li.textContent = comentario;
      commentsList.appendChild(li);
    });
  }
  
  // Función para enviar un comentario
  function submitComment() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();
  
    if (commentText !== "") {
      comentarios.push(commentText);
      commentInput.value = "";
      showComments();
    }
  }
  
  // Muestra los comentarios al cargar la página
  document.addEventListener("DOMContentLoaded", showComments);
  