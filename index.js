const express = require("express");
// const app = express();
const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Define rutas y controladores
app.get("/", (req, res) => {
  // res.send('¡Hola, mundo!');
  res.redirect("login.html");
  // El botón del login, si está bien, me tiene que redirigir a index.html (inicio)
});

app.get("/login", (req, res) => {
  res.redirect("login.html");
});

app.get("/inicio", (req, res) => {
  res.redirect("inicio.html");
});

app.get("/pagar", (req, res) => {
  res.redirect("/pages/pagar.html");
});

app.get("/perfil", (req, res) => {
  res.redirect("/pages/perfil.html");
});

// app.get("/monitores", (req, res) => {
//   res.redirect("/pages/monitores.html");
// });

// app.get("/karakids", (req, res) => {
//   res.redirect("/pages/karakids.html");
// });

// app.get("/karaadults", (req, res) => {
//   res.redirect("/pages/karaadults.html");
// });

// app.get("/api/monitores", (req, res, next) => {
//   req.DB = DB;
//   return res.json(req.DB.monitores);
// });

// Arranca el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
