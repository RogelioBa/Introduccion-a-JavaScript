function calcular(num1, num2, callback) {
    let resultado = callback(num1, num2);
    
    console.log("El resultado es:", resultado);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if(b === 0) {
        return "Error: No se puede dividir entre cero";
    }
    return a / b;
}

console.log("--- Pruebas de Operaciones ---");
calcular(10, 5, suma);           
calcular(10, 5, resta);          
calcular(10, 5, multiplicacion); 
calcular(10, 5, division);       
