// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003). 
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error. 
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.

import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

const obtenerNombreMes = (mes) => {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return meses[mes - 1];
};

let dia = parseInt(prompt(chalk.bgBlackBright("Ingresa el día (1-31): ")));
let mes = parseInt(prompt(chalk.bgBlackBright("Ingresa el mes (1-12): ")));
let anio = parseInt(prompt(chalk.bgBlackBright("Ingresa el año (mayor a 2000): ")));


if (mes < 1 || mes > 12) {
    console.log(chalk.redBright("Error: El número del mes debe estar entre 1 y 12."));
} else if (dia < 1 || dia > 31) {
    console.log(chalk.redBright("Error: El día debe estar entre 1 y 31."));
} else if (anio <= 2000) {
    console.log(chalk.redBright("Error: El año debe ser mayor que 2000."));
} else {
   
    console.log(chalk.bgGreenBright(`La fecha es: ${dia}-${obtenerNombreMes(mes)}-${anio}                        `));
}