export interface Cliente {
  idCliente : number,
  numeroCpf : string,
  email: string,
  idCategoriaCliente : number
}


// export interface ClientesCadastrado {
//   idCliente : number,
//   numeroCpf : string,
//   email: string
// }

export interface ResponseClientesCadastrados {
  clientes : Cliente[]

}
