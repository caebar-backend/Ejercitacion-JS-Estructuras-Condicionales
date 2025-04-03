// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.

import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()


const costosDiarios = {
    1: 125,
    2: 116,
    3: 120,
    4: 132,
    5: 138
};


function mostrarTablaEnfermedades() {
    console.log("\nTabla de Costos Diarios por Enfermedad:");
    console.log("|--------------------|--------------------|");
    console.log("| Tipo de Enfermedad | Costo/Paciente/Día |");
    console.log("|--------------------|--------------------|");
    for (const [tipo, costo] of Object.entries(costosDiarios)) {
        console.log(`| ${tipo.padEnd(18)} | ${costo.toString().padEnd(18)} |`);
    }
    console.log("|--------------------|--------------------|\n");
}


function calcularCostoHospitalizacion() {
    console.log("Sistema de Cálculo de Costos Hospitalarios");
    console.log("----------------------------------------");
    
    
    mostrarTablaEnfermedades();
    
   
    const tipoEnfermedad = parseInt(prompt("Ingrese el tipo de enfermedad (1-5): "));
    const diasHospitalizacion = parseInt(prompt("Ingrese los días de hospitalización: "));
    
   
    if (isNaN(tipoEnfermedad) || isNaN(diasHospitalizacion)) {
        console.log("Error: Debe ingresar valores numéricos");
        return;
    }
    
    if (!costosDiarios.hasOwnProperty(tipoEnfermedad)) {
        console.log("Error: El tipo de enfermedad debe ser entre 1 y 5");
        return;
    }
    
    if (diasHospitalizacion <= 0) {
        console.log("Error: Los días de hospitalización deben ser mayores a 0");
        return;
    }
    
   
    const costoDiario = costosDiarios[tipoEnfermedad];
    const costoTotal = costoDiario * diasHospitalizacion;
    
  
    console.log("\nResumen de Costos:");
    console.log(`- Tipo de enfermedad: ${tipoEnfermedad}`);
    console.log(`- Días de hospitalización: ${diasHospitalizacion}`);
    console.log(`- Costo diario: $${costoDiario}`);
    console.log(`- Costo total: $${costoTotal}`);
}


calcularCostoHospitalizacion();