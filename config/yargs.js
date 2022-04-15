const { number } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description:
      "este comnado sirve para poner la base de la tabla a multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: number,
    default: 10,
    description: "numero hasta el que deaseas hacer la tabla",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    if (argv.hasta < 1) {
      throw "el numero debe ser mayor a 1";
    }
    if (isNaN(argv.hasta)) {
      throw "el valor de hasta no es un numero";
    }
    return true;
  }).argv;

module.exports = { argv };
