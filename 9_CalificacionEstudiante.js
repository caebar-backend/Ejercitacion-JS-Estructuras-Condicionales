// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero). 
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|


import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()


function obtenerCalificacion(nota) {
    if (nota >= 0 && nota <= 2.9) {
        return "Desaprobado";
    } else if (nota >= 3 && nota <= 5.9) {
        return "Aprobado";
    } else if (nota >= 6 && nota <= 8.9) {
        return "Notable";
    } else if (nota >= 9 && nota <= 10) {
        return "Sobresaliente";
    } else {
        return "Nota inválida";
    }
}


function evaluarEstudiante() {
    console.log("Sistema de Calificación de Estudiantes");
    console.log("------------------------------------");
    
   
    console.log("\nTabla de Calificaciones:");
    console.log("|---------|--------------|");
    console.log("| Nota    | Calificación |");
    console.log("|---------|--------------|");
    console.log("| 0 - 2.9 | Desaprobado  |");
    console.log("| 3 - 5.9 | Aprobado     |");
    console.log("| 6 - 8.9 | Notable      |");
    console.log("| 9 - 10  | Sobresaliente|");
    console.log("|---------|--------------|\n");
    
   
    const nombre = prompt("Ingrese el nombre del estudiante: ");
    const nota = parseFloat(prompt("Ingrese la nota del examen final (0-10): "));
    
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log(chalk.bgRed("Error: La nota debe ser un número entre 0 y 10 "));
        return;
    }
    
   
    const calificacion = obtenerCalificacion(nota);
    
  
    console.log(chalk.bgBlue("\nResultado de la Evaluación: "));
    console.log(chalk.bgBlue(`- Estudiante: ${nombre}`));
    console.log(chalk.bgBlue(`- Nota: ${nota.toFixed(1)}`));
    console.log(chalk.bgBlue(`- Calificación: ${calificacion}`));
}


evaluarEstudiante();