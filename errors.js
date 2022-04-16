function validaArrey(arr, num) {
  try {
    if (!arr || !num) {
      throw new ReferenceError("Envie os parâmetros.");
    }
    if (typeof arr !== "object") {
      throw new TypeError("O array deve ser do tipo object.");
    }
    if (typeof num !== "number") {
      throw new TypeError("O número deve ser do tipo number.");
    }
    if (arr.length !== num) {
      throw new RangeError("Tamanho do array inválido.");
    }
    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError.");
      console.log(e.name);
      console.log(e.message);
      console.log(e.stack);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError.");
      console.log(e.name);
      console.log(e.message);
      console.log(e.stack);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError.");
      console.log(e.name);
      console.log(e.message);
      console.log(e.stack);
    } else {
      console.log("Tipo de erro inesperado: " + e);
    }
  }
}

console.log(validaArrey());
console.log(validaArrey([], 5));
console.log(validaArrey(5, 5));
console.log(validaArrey([1, 2, 3, 4, 5], "a"));
console.log(validaArrey([1, 2, 3, 4, 5], 5));
