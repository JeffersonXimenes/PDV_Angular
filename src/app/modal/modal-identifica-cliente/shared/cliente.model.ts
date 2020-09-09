export interface Cliente {
  idCliente : number,
  numeroCpf : string,
  email: string,
  idCategoriaCliente : number
}

export interface ResponseClientesCadastrados {
  clientes : Cliente[]

}
