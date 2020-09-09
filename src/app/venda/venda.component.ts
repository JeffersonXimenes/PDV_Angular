import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from './shared/produto.service';
import { DocFiscalService } from './shared/doc-fiscal.service'
import { ResponseProduto, Produto } from './shared/produto.model';
import { DocFiscal, DocumentoItem } from './shared/doc-fiscal.model';
import { NgForm } from '@angular/forms';
import { OperadorService } from '../modal/modal-matricula-operador/shared/operador.service';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  @ViewChild('formProdutos', { static: true }) formProdutos: NgForm;

  constructor(private produtoService: ProdutoService, private docFiscaService: DocFiscalService, private operadorService: OperadorService) { }

  cliente: any
  responseProduto: ResponseProduto[];
  docFiscal: DocFiscal;
  request: any;
  listaDeProdutos: Array<any> = [];
  listaItensNota: Array<any> = [];
  cdProduto: number;
  quantidade: number = 1;
  total: any = 0.0;
  totalGeral: any = 0.0;
  qtdTotal: any = 0.0;
  desconto: number = 0.0;
  dinheiro: number = 0.0;
  filial = JSON.parse(localStorage['filial']);
  troco: any = 0.0;
  recebido: any = 0.0;
  numItem: number = 0.0;
  pagamentos: Array<Pagamento> = [];
  requestGerente: any;
  nmMatriculaGerente: string;
  itemSelec: any;
  trocoNegat: any = 0.0;

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage['clienteCadastrado']);
    console.log(this.cliente);
  }

  //Função para buscar o produto pelo código no banco de dados
  buscarProduto() {

    if (this.cdProduto == null || this.cdProduto <= 0) {
      alert("DIgite um código de produto válido");
    }
    else if (this.quantidade == null || this.quantidade < 1) {
      alert("Quantidade Inválida, insira um número maior que 0")
    }
    else {
      this.produtoService.getProduto(this.cdProduto).subscribe(response => {
        this.request = response; this.addProdutoLista();
        if (this.request == null) {
          alert("Produto não existe!")
        }
        let produto = localStorage['produto'] = JSON.stringify(this.listaDeProdutos);
      });
    }
  }

  //Função para adicionar um item a lista de produtos
  addProdutoLista() {
    let item = new VendaItem(this.request.cdProduto, this.request.valorProduto,
      this.request.descricaoProduto, this.quantidade);
    this.listaDeProdutos.push(item);
    this.total = Math.round((this.total +(this.request.valorProduto * this.quantidade))* 100) / 100;
    this.totalGeral = Math.round(this.total * 100) / 100;
    this.qtdTotal += (this.quantidade);
    this.addItensNota();

    this.quantidade = 1;

  }

  //Função para adicionar o produto na lista de itens da nota
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
    this.numItem++;

  }

  //Função para um pagamento no array de pagamentos
  addPagamento(formaPagamento: number, partePaga: number) {
    let pagto = new Pagamento();
    let pagtoTipo = new TipoPagamento(formaPagamento);
    pagto.tipoPagamento = pagtoTipo;

    if (partePaga == 0) {
      pagto.vlPagamento = this.total;
    } else if (partePaga == 1) {
      pagto.vlPagamento = this.recebido;
    }
    this.pagamentos.push(pagto);
    this.total = Math.round((this.total - this.recebido) *100)/100;
    this.recebido = 0;
    console.log(this.pagamentos);
  }

  //Retirar o pagamento do cartão da lista caso não prossiga com o pagamento
  cancelarPagamentoCartao() {
    this.pagamentos.pop();
  }

  //Função para calculo de troco
  calcularTroco() {
    if(this.recebido < this.total ){
      this.trocoNegat = ("Faltam: R$ " + Math.round((this.total - this.recebido) * 100) / 100);
    }
    this.troco = Math.round((this.recebido - this.total) * 100) / 100;
    
  }

  //Função para adicionar as informações do documento fiscal
  registrarDocFiscal() {
    //Formato do json a ser mandado para API
    let retorno: DocFiscal = {
      operacao: {
        cdOperacao: 1
      },
      filial: {
        cdFilial: this.filial.cdFilial
      },
      cliente: {
        idCliente: this.cliente.idCliente
      },

      dataAbertura: "",
      dataFechamento: "",
      flagNota: 1,
      valorDocumento: this.totalGeral,
      numeroCaixa: 1,
      itens: this.listaItensNota,
      pagamentos: this.pagamentos
    }

    localStorage.vendas = JSON.stringify(retorno.valorDocumento)

    this.docFiscaService.createDocFiscal(retorno).subscribe()
    console.log(retorno);

  }

  //Função pra retornar o numero do item na lista que será cancelado
  selecionarItem(itemSelecionado: any) {
    this.itemSelec = itemSelecionado
  }

  //Função de
  cancelarProduto() {

    this.operadorService.getOperador(this.nmMatriculaGerente).subscribe(
      response => {this.requestGerente = response; console.log(this.requestGerente)
        if (this.requestGerente.descricaoCargo == 'GERENTE') {
          alert("Produto Cancelado");
          this.total = (this.total - (this.listaDeProdutos[this.itemSelec].valorProduto * this.listaItensNota[this.itemSelec].qtdItem));
          this.qtdTotal = (1 * (this.qtdTotal - this.listaItensNota[this.itemSelec].qtdItem));

          this.listaDeProdutos.splice(this.itemSelec, 1);
          this.listaItensNota.splice(this.itemSelec, 1);
          for (let i = 0; i < this.listaItensNota.length; i++) {
            this.listaItensNota[i].numItemDoc = i + 1;
            this.numItem = i + 1
          }
          this.nmMatriculaGerente = null;
        } else {
          alert("Você não é gerente")
        }
      }
    )

  }

}
//Final do component

//Classes auxiliares
class DocumentoFiscal {
  public idDocumentoFiscal: number;
  public operacao: number;
  public filial: number;
  public cliente: number;
  public flagNota: number;
  public valorDocumento: number;
  public numeroCaixa: number;
  public itens: Array<DocItem> = [];

  constructor() { };

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

class Pagamento {
  tipoPagamento: TipoPagamento;
  vlPagamento: number;
  constructor() { }
}

class TipoPagamento {

  constructor(public idTipoPagamento: number) { }
}
