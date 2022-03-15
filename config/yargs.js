//Configuración yargs
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 12,
    describe: "Es rango de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.base) || isNaN(argv.hasta)) {
      throw "La base/rango tiene que ser un número.";
    }
    return true;
  }).argv;

module.exports = argv;
