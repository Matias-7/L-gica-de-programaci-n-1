
function ordenarNumeros(num1, num2, num3, num4){

    num1 = Number(num1)
    num2 = Number(num2)
    num3 = Number(num3)
    num4 = Number(num4)


if (num1 === num2 && num2 === num3 && num3 === num4) {
    console.log("Los números son iguales.");
}

let numeros = [num1, num2, num3, num4];
numeros.sort((a, b) => a - b);

console.log("Entradas:", num1, num2, num3, num4);
  console.log("Salida:");
  console.log("De mayor a menor:", numeros.join(", "));
  console.log("De menor a mayor:", numeros.reverse().join(", "));
  console.log("El número mas alto es:", Math.max(num1, num2, num3, num4));
  console.log("El número del centro es:", numeros[1]);
  console.log("El número mas pequeño es:", Math.min(num1, num2, num3, num4));
  console.log("---");
}

let casos = [
    [4, 4, 2],
    [4, 4, 5],
    [2, 3, 4],
    [4, 2, 4, 3],
    [4, 4, 2, 5],
    [2, 4, 4, 6],
    [2, 4, 4, 5],
    [4, 4, 2, 1],
    [2, 4, 4, 1],
    [1, 3, 2, 4]
  ];
  
  casos.forEach(caso => ordenarNumeros(...caso));
