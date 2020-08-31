import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from './shared/produto.service';
import { DocFiscalService } from './shared/doc-fiscal.service'
import { ResponseProduto, Produto } from './shared/produto.model';
import { DocFiscal, DocumentoItem } from './shared/doc-fiscal.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  @ViewChild('formProdutos', { static: true }) formProdutos: NgForm;

  constructor(private produtoService: ProdutoService, private docFiscaService: DocFiscalService) { }

  responseProduto: ResponseProduto[];
  docFiscal: DocFiscal;
  request: any;
  listaDeProdutos: Array<any> = [];
  listaItensNota: Array<any> = [];
  cdProduto: number;
  quantidade: number;
  total: number = 0;
  qtdTotal: number = 0;
  desconto: number = 0;
  dinheiro: number = 0;
  filial = JSON.parse(localStorage['filial']);
  troco: number = 0;
  recebido: number = 0;
  numItem: number = 0;

  ngOnInit(): void {
  }

  //Função para buscar o produto leo código no banco de dados
  buscarProduto() {
    this.produtoService.getProduto(this.cdProduto).subscribe(response => {
      this.request = response; this.addProdutoLista(); console.log(this.request.cdProduto);
      let produto = localStorage['produto'] = JSON.stringify(this.listaDeProdutos);
    });
  }

  //Função para adicionar um item a lista de produtos
  addProdutoLista() {
    let item = new VendaItem(this.request.cdProduto, this.request.valorProduto,
      this.request.descricaoProduto, this.quantidade);
    this.listaDeProdutos.push(item);
    console.log(this.listaDeProdutos);
    this.total += (this.request.valorProduto * this.quantidade);
    this.qtdTotal += (this.quantidade);

    this.addItensNota();

  }

  addItensNota() {
    let docItem = new DocItem();
    let docItemProd = new DocItemProd(this.request.cdProduto);
    docItem.porcentoIcms = 0;
    docItem.produto = docItemProd;
    docItem.qtdItem = this.quantidade;
    docItem.valorIcms = 0;
    docItem.valorItem = (this.request.valorProduto * this.quantidade);
    docItem.numItemDoc = this.numItem + 1;
    this.listaItensNota.push(docItem);
    console.log(this.listaItensNota);
    this.numItem++;
    console.log(docItem.qtdItem);
    
  }

  //Função para calculo de troco
  calcularTroco() {
    this.troco = this.recebido - this.total;
  }

  //Função para adicionar as informações do documento fiscal
  registrarDocFiscal() {
    console.log(this.retorno);
    //this.docFiscaService.createDocFiscal(this.retorno).subscribe()

  }

  //Formato do json a ser mandado para API
  retorno: DocFiscal = {
    operacao: {
      cdOperacao: 4
    },
    filial: {
      cdFilial: this.filial.cdFilial
    },
    cliente: {
      idCliente: 5
    },

    dataAbertura: "",
    dataFechamento: "",
    flagNota: 1,
    valorDocumento: this.total,
    numeroCaixa: 1,
    itens: this.listaItensNota
  }

} //Final do component


class DocumentoFiscal {
  public idDocumentoFiscal: number;
  public operacao: number;
  public filial: number;
  public cliente: number;
  public flagNota: number;
  public valorDocumento: number;
  public numeroCaixa: number;
  public itens: Array<DocItem> = [];

  constructor() {

  };
  // constructor(public idDocumentoFiscal: number,public operacao: number, public filial: number,
  //   public cliente: number, public flagNota: number, public valorDocumento: number
  //   , public numeroCaixa: number, public itens: Array<DocItem>){}

}

class VendaItem {
  constructor(public cdProduto: number,
    public valorProduto: number, public descricaoProduto: String,
    public qtdProduto: number) { }
}


class DocItem {

  documentoFiscal: number;
  numItemDoc: number;
  produto: DocItemProd;
  qtdItem: number;
  valorItem: number;
  porcentoIcms: number;
  valorIcms: number;
}

class DocItemProd {
  constructor(public cdProduto: number) { }
}
