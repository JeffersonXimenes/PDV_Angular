export interface DocFiscal{

    operacao: Operacao,
    filial: Filial,
    cliente: Cliente,
    flagNota: number,
    valorDocumento: number,
    numeroCaixa: number,
    itens: any,
    dataAbertura: String,
    dataFechamento: String,
    pagamentos: any
}

export interface DocFiscalResponse{
    docFiscal: DocFiscal[];
}

export interface Operacao{
    cdOperacao: number,
}

// export interface TipoOperacao{
//     idTipoOperacao: number;
//     descricaoTipoOperacao: String;
// }

export interface Filial{
    cdFilial: number;
}


export interface Cliente{
    idCliente: number;
}

export interface DocumentoItem{
    
    numItemDoc: number,
    produto: Produto,
    qtdItem: number,
    valorItem: number,
    porcentoIcms: number,
    valorIcms: number;
}

export interface Produto {
    cdProduto: number,
    valorProduto: number,
    descricaoProduto: String
}