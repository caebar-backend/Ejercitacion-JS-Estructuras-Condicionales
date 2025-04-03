// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.


import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()
// --------------------------------------------------------

const esParImpar = (Num) => {
    if (N === 0){
      return console.log(chalk.yellowBright(`El número ingresado es ${N}.\nDicho dígito no es par, tampoco impar; no es positivo ni negativo.`))
    } else if (N % 2 === 0) {
       return console.log(chalk.blueBright(`El número ingresado es ${N}.\nDicho dígito es par.`))
    } else if (N % 2 !== 0) {
      return console.log(chalk.green(`El número ingresado es ${N}.\nDicho dígito es impar.`))
    } 
    }

// ---------------------------------------------------------
    
let N = parseInt((prompt('Ingrese un número de 1 a 100: ')))

// --------------------------------------------------------

if (N >= 0 && N <= 100) {
   esParImpar(N)
} else {
    console.log(chalk.redBright('El número ingresado no está entre 1 y 100, o no es un número!.'))
}





