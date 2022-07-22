class contaBancaria{
    constructor(saldoCorrente, saldoPoupanca, juros){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }
    deposito(quantia){
        this.saldoCorrente += quantia;
    }
    saqui(quantia){
        this.saldoCorrente -= quantia;
    }
    transferir(quantia){
        if (quantia <= this.saldoCorrente){
            let valor = this.saldoCorrente - quantia;
            this.saldoPoupanca += valor;
        }
        else{
            console.log("saldo insuficiente! não foi possível completar transferência.")
        }
    }
}


let wine = new contaBancaria(100, 100, 15)

wine.deposito(200)
console.log(wine.saldoCorrente)
wine.transferir(100000)
console.log(wine.saldoPoupanca)
