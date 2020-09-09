

interface Global {
  test: string,
  totalFechamentoCaixa : number []
}

export namespace Global {

  export var totalFechamentoCaixa : Number = 0
  //export var static total : totalFechamentoCaixa

}

export namespace FechamentoCaixa {
  export var totalFechamento : Array<Number> = []
  export var soma = totalFechamento
}


//export namespace somaFechamento {

  //export var totalFechamento = []
  //export var guardarAqui = JSON.parse(localStorage.getItem('vendas'))
  //export var totalValores = JSON.parse(localStorage.getItem('totalValores'))

  //localStorage['totalValores'] = JSON.stringify(this.totalValores)
  //localStorage.setItem('vendas', '0')
//}
