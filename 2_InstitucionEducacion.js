// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, 
// se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen. 
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse). 
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba. 
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.

import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

const carrera = prompt(`Indique la franja horaria de su Carrera (diurna o vespertina): `)

const notaObtenida = parseFloat(prompt(`Indique la nota numérica que obtuvo en el examen: `))

const franjaHoraria = carrera.toLowerCase()

if (franjaHoraria === "vespertina") {
    if (notaObtenida > 10 || notaObtenida < 11) {
        console.log(chalk.red(`Nota fuera de rango`))
    }
    else if (notaObtenida >= 6 && notaObtenida <= 10) {
              console.log(chalk.green(`Estudiante, usted se eximió.`))
    }
    else if (notaObtenida >= 3.5 && notaObtenida < 6) {
        console.log(chalk.yellow(`Estudiante, usted rinde examen.`))
    }
    else {
        console.log(chalk.red(`Estudiante, usted reprueba.`))
    }

} else if (franjaHoraria === "diurna") {
    if (notaObtenida > 10 || notaObtenida < 11) {
        console.log(chalk.red(`Nota fuera de rango`))
    }
    else if (notaObtenida >= 3.5 && notaObtenida <= 10){
        console.log(chalk.yellow(`Estudiante, usted rinde examen.`))
    } else {
        console.log(chalk.red(`Estudiante, usted reprueba.`))
    }
} else {
    console.log(chalk.red(`Franja horaria no válida`))
}

