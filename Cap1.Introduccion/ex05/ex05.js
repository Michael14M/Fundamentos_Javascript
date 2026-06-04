let a, b;
let suma, resta, mult, div, residuo, potencia; 

a = parseInt (prompt("ingresa el primer numero: "));
b = parseInt (prompt("ingresa el sgundo numero: "));

// resultados de operaciones 
suma = a + b;
resta = a - b;
mult = a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;


// imprimir resultados
document.writeln("La suma es: ", suma, "<br>");
document.writeln("La resta es: ", resta, "<br>");
document.writeln("La mult es: ", mult, "<br>");
document.writeln("La div es: ", div, "<br>");
document.writeln("La residuo es: ", residuo, "<br>");
document.writeln("La potencia es: ", potencia, "<br>");