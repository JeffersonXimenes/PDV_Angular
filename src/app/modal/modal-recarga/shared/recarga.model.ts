export interface Recarga {
  operacao : {
    cdOperacao : number
  },
  filial : {
    cdFilial : number
  },
  recarga : {
    idRecarga: number,
    numeroTelefone: string,
    valorRecarga: number,
    operadora : {
      idOperadora: number,
      descricaoOperadora : string,
    }
  },
  dataAbertura: string,
  dataFechamento: string,
  valorDocumento: string,
  flagNota: number,
  numeroCaixa: number,
}

export interface Operadora {
  idOperadora : number,
  descricaoOperadora : string,
}


export interface ResponseRecargas {
  recargas : Operadora[];
}
