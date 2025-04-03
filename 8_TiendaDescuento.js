// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. 
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%. 
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.


import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()


const DESCUENTOS = {
    'blanco': 0,
    'verde': 10,
    'amarillo': 25,
    'azul': 50,
    'anaranjado': 100
};


function mostrarTablaDescuentos() {
    console.log("\nTabla de Descuentos por Color de Bolita:");
    console.log("|--------------------------|------------|");
    console.log("| Color de la Bolita       | Descuento  |");
    console.log("|--------------------------|------------|");
    for (const [color, descuento] of Object.entries(DESCUENTOS)) {
        console.log(`| ${color.padEnd(24)} | ${descuento.toString().padEnd(10)}% |`);
    }
    console.log("|--------------------------|------------|\n");
}


function calcularPagoFinal() {
    console.log("Sistema de Descuentos por Color de Bolita");
    console.log("----------------------------------------");
    
    
    mostrarTablaDescuentos();
    
    
    const montoCompra = parseFloat(prompt("Ingrese el monto total de la compra: $"));
    const colorBolita = prompt("Ingrese el color de la bolita (blanco/verde/amarillo/azul/anaranjado): ").toLowerCase();
    
   
    if (isNaN(montoCompra) || montoCompra <= 0) {
        console.log("Error: El monto de compra debe ser un número positivo");
        return;
    }
    
    if (!DESCUENTOS.hasOwnProperty(colorBolita)) {
        console.log("Error: Color de bolita no válido. Por favor ingrese uno de los colores mostrados.");
        return;
    }
    

    const porcentajeDescuento = DESCUENTOS[colorBolita];
    const descuento = montoCompra * (porcentajeDescuento / 100);
    const pagoFinal = montoCompra - descuento;
    
   
    console.log("\nResumen de Compra:");
    console.log(`- Monto original: $${montoCompra.toFixed(2)}`);
    console.log(`- Color de bolita: ${colorBolita}`);
    console.log(`- Descuento aplicado: ${porcentajeDescuento}% ($${descuento.toFixed(2)})`);
    console.log(`- TOTAL A PAGAR: $${pagoFinal.toFixed(2)}`);
}


calcularPagoFinal();