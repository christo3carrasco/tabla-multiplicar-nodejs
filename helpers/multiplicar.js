const colors = require("colors");
const fs = require("fs");

//Crear tabla de multiplicar
const crearArchivo = async (base = 5, listar, hasta = 12) => {
  console.log("====================".america);
  console.log("    TABLA DEL".yellow, base);
  console.log("====================".america);

  //Ciclo producto de los factores
  try {
    let salida = await "";
    let salidac = await "";
    for (let i = 1; i <= hasta; i++) {
      salidac += `${base} ${"x".red} ${i} ${"=".red} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log(salidac);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
