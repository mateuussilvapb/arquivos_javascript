class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(val) {
    this._saldo = val;
  }

  depositar(val) {
    if (val <= 0) {
      throw "Valor negativo ou igual a 0.";
    } else {
      this._saldo = this._saldo + val;
      return this._saldo;
    }
  }

  sacar(val) {
    if (val <= 0) {
      throw "Valor negativo ou igual a 0.";
    } else if (val > this._saldo) {
      throw "Valor informado é maior que o saldo em conta.";
    } else {
      this._saldo = this._saldo - val;
      return this._saldo;
    }
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(val) {
    this._cartaoCredito = val;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitaria";
  }

  sacar(val) {
    if (val <= 0) {
      throw "Valor negativo ou igual a 0.";
    } else if (val > this._saldo) {
      throw "Valor informado é maior que o saldo em conta.";
    } else if (val > 500) {
      throw "Valor informado excede o limite de saque";
    } else {
      this._saldo = this._saldo - val;
      return this._saldo;
    }
  }
}
