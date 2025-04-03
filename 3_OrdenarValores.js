// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

let numeros = []

let num1 = parseFloat(prompt(chalk.green(`Ingrese el primer número (entre 1 y 1000): `)))
let num2 = parseFloat(prompt(chalk.blue(`Ingrese el segundo número (entre 1 y 1000): `)))
let num3 = parseFloat(prompt(chalk.gray(`Ingrese el tercer número (entre 1 y 1000): `)))

numeros.push(num1, num2, num3)

const resultado = numeros.sort((a, b) => {
    return a - b
})

console.log(chalk.yellow(`Números ordenados de manera creciente: ${resultado}`))



