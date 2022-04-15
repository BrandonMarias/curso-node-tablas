const fs = require("fs");
const color = require("colors");
// const crearArchivo = (n = 7) => {

//   let salida = `===================
// === Tabla del ${n} ===
// ===================
// `;

//   for (let i = 1; i < 11; i++) {
//     salida += `${n} x ${i} = ${n * i}\n`;
//   }

//   fs.writeFileSync(`tabla-del-${n}.txt`, salida);
//   console.log(`tabla del ${n} creada`);
// };

const getTabla = async (base, listar, hasta) => {
  try {
    let salida = `===================
=== Tabla del ${base} ===
===================
`;
    let nombreTabla = `tabla-del-${base}.txt`;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFileSync("./data/" + nombreTabla, salida);
    if (listar) {
      console.log(salida.rainbow);
    }
    return nombreTabla;
  } catch (err) {
    throw err;
  }
};

module.exports = { getTabla };
