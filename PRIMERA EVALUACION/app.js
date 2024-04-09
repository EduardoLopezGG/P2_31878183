//Creamos dos constantes, una que requiera express y otra que requiera path
const express = require("express");
const path = require("path");

//creamos la variable aplicacion con los valores de express
const aplicacion = express();

//Ubicamos los archivos estaticos del sitio web
aplicacion.use(express.static(__dirname + "/public"));

//ubicamos el o los archivos html para mostrar correctamoente la pagina
aplicacion.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"))
});

//hace que la variable aplicacion escuche y haga funcionamiento en el puerto 3000
aplicacion.listen(3000, () => {
	console.log("servidor activo en el puerto", 3000)
});