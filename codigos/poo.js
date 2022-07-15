class contaBanco{
    constructor(saldo){
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
}
let contaMarcelo = new contaBanco(20);
contaMarcelo.depositar(2000); //depositou 2.000,00
console.log(contaMarcelo.saldo) //2020
contaMarcelo.sacar(590);//sacor 590
console.log(contaMarcelo.saldo)// restou 1430

// //////////////////////////////////////////////////////

