function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 == 0;
}

const numeros = [
  1, 2, 3, 4, 55, 66, 852, 3654, 458, 25321, 256, 9654, 52314, 625, 5, 6, 7, 8,
  9, 10,
];

console.log(filtraPares(numeros));
console.log(numeros);
