function mapSemThis(arr) {
  return arr.map((item) => {
    return item * 2;
  });
}

const numeros = [1, 3, 5, 7, 9, 11];

console.log(mapSemThis(numeros));
console.log(numeros);
