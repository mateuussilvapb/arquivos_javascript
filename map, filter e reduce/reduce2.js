const lista = [
  {
    nome: "Folha",
    valor: 0.5,
  },
  {
    nome: "Caneta",
    valor: 1.0,
  },
  {
    nome: "Lapizeira",
    valor: 1.0,
  },
  {
    nome: "Toalha",
    valor: 50,
  },
  {
    nome: "Cesto de lixo",
    valor: 50,
  },
];

const saldoDisponivel = 200;

function saldoFinal(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log("rodada: ", index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.valor;
  }, saldoDisponivel);
}

console.log(saldoFinal(saldoDisponivel, lista));
