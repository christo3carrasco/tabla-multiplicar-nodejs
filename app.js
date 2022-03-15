require("colors");
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

//Limpiar consola
console.clear();

//Generar tabla de multiplicar
crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado".green))
  .catch((err) => console.log(err.red));
