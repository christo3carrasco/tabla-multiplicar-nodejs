const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

//console.log(argv);
// console.log("base: yargs", argv.base);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// const base = 5;

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado".green))
  .catch((err) => console.log(err.red));
