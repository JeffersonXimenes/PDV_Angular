
import { CardHomeComponent } from './../../card-home/card-home.component';
import { formatDate } from '@angular/common';
import { format } from 'path';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-modal-fechamento-caixa',
  templateUrl: './modal-fechamento-caixa.component.html',
  styleUrls: ['./modal-fechamento-caixa.component.css']
})
export class ModalFechamentoCaixaComponent implements OnInit {

  formatUsuario = new Date()
  formatUser : string;
  validadorFechamento = localStorage.getItem('status')
  filial : any
  total : number = 0


  constructor() {}

  ngOnInit(): void {
    this.formatUser = formatDate(this.formatUsuario, 'dd/MM/yyyy', 'en-US')
    this.validadorFechamento
    this.filial = JSON.parse(localStorage['filial'])
    //this.somaFechamento = JSON.parse(localStorage['totalValores'])
    //console.log(this.somaFechamento.length)
    //this.exibirTotalFechamento()
    this.exibirTotal()
  }

  validarFechamento() {
    if(localStorage.getItem('status') == '1') {
      localStorage.setItem('status', '0')
    }
  }

  exibirTotal()  {
    var somaFechamento : Array<any> = []
    somaFechamento = JSON.parse(localStorage['totalValores'])

    for(var posicao = 0 ; posicao < somaFechamento.length ; posicao ++) {
        console.log(somaFechamento[posicao]);
        this.total += somaFechamento[posicao]
    }
    console.log(this.total)
  }

  confirmFechamento() {
    this.validarFechamento()
    localStorage.setItem('totalValores' , '[]')
  }


}
