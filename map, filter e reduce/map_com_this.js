const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

/**
 * Nos dois últimos exemplos, estamos passando o array 'nume-
 * ros' como primeiro parâmetro, e os objetos 'maca' e 'laran-
 * ja' como o segundo parâmetro respectivamente.
 *
 * Ou seja, a função mapComThis irá multiplicar cada item do
 * array 'arr' passado como argumento, pelo valor da variável
 * 'value' pertencente aos objetos 'maca' e 'laranja' respec-
 * tivamente.
 *
 * O tamanho do array resultante irá variar a depender do ta-
 * manho do array passado como argumento.
 *
 * O 'this.value' refere-se ao objeto passado como argumento
 * no parâmetro 'thisArg'. Ou seja, é de se esperar que o
 * objeto passado como parâmetro para a variável 'thisArg' pos-
 * sua a variável 'value'.
 * @param {array} arr
 * @param {object} thisArg
 * @returns
 */
function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const numeros = [1, 2];

console.log("this -> maça: ", mapComThis(numeros, maca));
console.log("this -> laranja: ", mapComThis(numeros, laranja));
