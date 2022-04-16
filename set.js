const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
function valoresUnicos(array) {
  //   utilizando set
  /*   const valores = new Set(array);
       return valores; */
  /*   Utilizando spread (...) para colocar os
    elementos do Set em um array. Sem o '...', só 
    estaríamos colocando um set dentro de um array,
    e não seus elementos.
    */
  const set = new Set(array);
  return [...set];
}

console.log(valoresUnicos(meuArray));
