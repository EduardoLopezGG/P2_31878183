const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const aplicacion = express();

aplicacion.use(express.static(__dirname + "/public"));

aplicacion.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"))
});

const db = new sqlite3.Database('contactos.db');

db.run(`
    CREATE TABLE IF NOT EXISTS contactos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        email TEXT,
        comentario TEXT,
        ip_usuario TEXT,
        fecha_hora DATETIME
    )
`);

app.use(express.urlencoded({ extended: true }));

app.post('/guardar_contacto', (req, res) => {
  const { nombre, email, comentario } = req.body;
  const ip_usuario = req.ip; // Dirección IP del usuario
  const fecha_hora = new Date();

  // Guardar datos en la base de datos
  db.run(`
      INSERT INTO contactos (nombre, email, comentario, ip_usuario, fecha_hora)
      VALUES (?, ?, ?, ?, ?)
  `, [nombre, email, comentario, ip_usuario, fecha_hora], (err) => {
      if (err) {
          console.error(err.message);
          res.status(500).send('Error al guardar los datos');
      } else {
          res.send('¡Gracias por contactarnos!');
      }
  });
});

aplicacion.listen(3000, () => {
	console.log("servidor activo en el puerto", 3000)
});