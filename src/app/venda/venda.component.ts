import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from './shared/produto.service';
import { ResponseProduto, Produto } from './shared/produto.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  
  @ViewChild('formProdutos', { static: true }) formTarefa: NgForm;

  constructor(private produtoService: ProdutoService) { }

  responseProduto: ResponseProduto[];
  request: any;
  listaDeProdutos: Array<VendaItem> = [];
  id: number;
  quantidade: number;
  total: number = 0;
  qtdTotal: number = 0;
  desconto: number = 0;
  ngOnInit(): void {
  }

  buscarProduto() {
    this.produtoService.getProduto(this.id).subscribe(response => {this.request = response; this.addProdutoLista();console.log(this.request.cdProduto);
    });
  }

  addProdutoLista() {
    let item = new VendaItem(this.request.cdProduto, this.request.valorProduto, this.request.descricaoProduto, this.quantidade);
    this.listaDeProdutos.push(item);
    console.log(this.listaDeProdutos);
    this.total += (this.request.valorProduto * this.quantidade);
    this.qtdTotal += (this.quantidade);

  }
}

class VendaItem {
  constructor(public cdProduto: number, public valorProduto: number, public descricaoProduto: String, 
    public qtdProduto: number) { }
}