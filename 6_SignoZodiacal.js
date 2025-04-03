// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.

import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

const obtenerSignoZodiacal = (dia, mes) => {
    
    const signos = [
        { nombre: "Capricornio", inicio: { dia: 22, mes: 12 }, fin: { dia: 19, mes: 1 } },
        { nombre: "Acuario", inicio: { dia: 20, mes: 1 }, fin: { dia: 18, mes: 2 } },
        { nombre: "Piscis", inicio: { dia: 19, mes: 2 }, fin: { dia: 20, mes: 3 } },
        { nombre: "Aries", inicio: { dia: 21, mes: 3 }, fin: { dia: 19, mes: 4 } },
        { nombre: "Tauro", inicio: { dia: 20, mes: 4 }, fin: { dia: 20, mes: 5 } },
        { nombre: "Géminis", inicio: { dia: 21, mes: 5 }, fin: { dia: 20, mes: 6 } },
        { nombre: "Cáncer", inicio: { dia: 21, mes: 6 }, fin: { dia: 22, mes: 7 } },
        { nombre: "Leo", inicio: { dia: 23, mes: 7 }, fin: { dia: 22, mes: 8 } },
        { nombre: "Virgo", inicio: { dia: 23, mes: 8 }, fin: { dia: 22, mes: 9 } },
        { nombre: "Libra", inicio: { dia: 23, mes: 9 }, fin: { dia: 22, mes: 10 } },
        { nombre: "Escorpio", inicio: { dia: 23, mes: 10 }, fin: { dia: 21, mes: 11 } },
        { nombre: "Sagitario", inicio: { dia: 22, mes: 11 }, fin: { dia: 21, mes: 12 } }
    ];

    
    const signoEncontrado = signos.find(signo => {
        
        if (signo.nombre === "Capricornio") {
            return (mes === 12 && dia >= signo.inicio.dia) || 
                   (mes === 1 && dia <= signo.fin.dia);
        }
        
        return (mes === signo.inicio.mes && dia >= signo.inicio.dia) || 
               (mes === signo.fin.mes && dia <= signo.fin.dia);
    });

    return signoEncontrado?.nombre || "Fecha no válida";
};


const esFechaValida = (dia, mes) => {
    if (isNaN(dia) || isNaN(mes)) return false;
    if (mes < 1 || mes > 12) return false;
    
    const diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dia >= 1 && dia <= diasPorMes[mes - 1];
};


let dia = parseInt(prompt(chalk.bgBlue("Ingresa el día de tu nacimiento (1-31):")));
let mes = parseInt(prompt(chalk.bgBlue("Ingresa el mes de tu nacimiento (1-12):")));


if (esFechaValida(dia, mes)) {
    const signo = obtenerSignoZodiacal(dia, mes);
    console.log(chalk.bgYellowBright(`Tu signo zodiacal es: ${signo}               `));
} else {
   console.log(chalk.bgRedBright("Fecha no válida. Por favor ingresa valores correctos.             "));
}