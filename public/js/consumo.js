// Agrega la función safeStringify
function safeStringify(obj) {
  try {
    return JSON.stringify(obj);
  } catch (error) {
    console.error("Error al convertir el objeto a cadena JSON:", error);
    return "{}"; // Devuelve un objeto vacío en caso de error
  }
}

// Luego, tu código fetch
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
      card.classList.add("mb-3");

      card.innerHTML = `
    <div class="card" style="position: relative; margin: 0 auto; text-align: center; width: 300px; height: 1050px;">
        <img src="${product.image}" class="card-img-top" alt="${product.title}" style="margin: 0 auto; text-align: center; width: 300px; height: 300px;">
        <div class="card-body" style="background-color: antiquewhite; padding: 10px; color: black;">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text" style="margin: 0 auto; text-align: center; background-color: #ece7eb; border: 2px solid black; border-radius: 10px; color: black; width: 150px">Price: $${product.price}</p>
            <button class="btn btn-success" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); padding: 10px; margin-top: 20px;" onclick="addToCart('${product.title}', ${product.price})">Comprar</button>
        </div>
    </div>
    `;

      document.querySelector(".renderProductos").appendChild(card);
    });
  });

// ...

// Verifica si el carrito ya existe en sessionStorage
var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Función para añadir un artículo al carrito
function addToCart(name, price) {
  var item = {
    name: name,
    price: price,
  };

  cart.push(item);

  // Almacena el carrito actualizado en sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Muestra el carrito en un modal de Bootstrap
  showCartModal();
}

// Función para obtener y mostrar el contenido del carrito
function viewCart() {
  // Muestra el carrito en un modal de Bootstrap
  showCartModal();
}

// Función para mostrar el carrito en un modal de Bootstrap
function showCartModal() {
  var modalContent = "";
  var totalPrice = 0; // Variable para almacenar la suma de los precios

  // Crea un nuevo elemento para cada artículo en el carrito
  cart.forEach(function (item, index) {
    //modalContent += `<p>${item.name} - ${item.price} € <button class="btn btn-danger" onclick="removeItemFromCart(${index})">Eliminar</button></p>`;
    modalContent += `<p>${item.name} - ${item.price} €`;
    totalPrice += item.price; // Suma el precio de cada artículo
  });

  modalContent += `<hr>`;
  modalContent += `<p>Total: ${totalPrice} €</p>`; // Agrega la suma total al contenido del modal

  // Muestra el modal de Bootstrap
  $("#cartModalContent").html(modalContent);

  // Configura el evento de clic para el botón "Pagar"
  $("#payButton").on("click", function () {
    // Redirige a la página "/pagar"
    window.location.href = "/pagar";
  });

  // Muestra el modal de Bootstrap
  $("#cartModal").modal("show");
}
