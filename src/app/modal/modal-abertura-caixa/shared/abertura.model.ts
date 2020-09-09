export interface Abertura {
  dataAbertura : Date;
  dataFechamento : Date;
  filial : {
    cdFilial : number;
  }
  numeroCaixa : number;
  operacao : {
    cdOperacao : number
  }
}
