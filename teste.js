let dias = 3856;
let qtdAnos, qtdMeses, restDias;
qtdAnos = Math.floor(dias / 365);
restDias = dias % 365;
qtdMeses = Math.floor(restDias / 30);
restDias = restDias % 30;

console.log(
  "Anos: " + qtdAnos + " \n Meses: " + qtdMeses + " \n Dias: " + restDias
);
