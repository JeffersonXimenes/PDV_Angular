export interface Produto {
    cdProduto: number,
    valorProduto: number,
    descricaoProduto: String
}



export interface ResponseProduto {
    produto: Produto[]
}
