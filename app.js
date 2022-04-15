const { getTabla } = require("./helpers/multiplicar");
const { argv } = require("./config/yargs");
const { color } = require("colors");

//'l'
//listar
//bolean
//default
// defaault: false
getTabla(argv.b, argv.l, argv.h)
  .then((msj) => console.log((msj + "creada").zebra))
  .catch((err) => console.log(err));
