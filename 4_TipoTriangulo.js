// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.


import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

let lado1 = parseFloat(prompt(chalk.bgGray("Ingresa el primer lado: ")));
let lado2 = parseFloat(prompt(chalk.bgGray("Ingresa el segundo lado: ")));
let lado3 = parseFloat(prompt(chalk.bgGray("Ingresa el tercer lado: ")));


if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log(chalk.yellow("El triángulo es equilátero."));
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log(chalk.green("El triángulo es isósceles."));
    } else {
        console.log(chalk.cyan("El triángulo es escaleno."));
    }
} else {
    console.log(chalk.red("Los lados ingresados no forman un triángulo válido."));
}