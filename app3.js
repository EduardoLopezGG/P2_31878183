const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const aplicacion = express();

aplicacion.use(express.static(__dirname + "/public"));

aplicacion.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"))
});

aplicacion.listen(3000, () => {
	console.log("servidor activo en el puerto", 3000)
});