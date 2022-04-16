function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current;
  });
}

const numeros = [1, 2];

console.log(somaNumeros(numeros));
