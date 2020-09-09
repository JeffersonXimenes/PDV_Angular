import { Abertura } from './shared/abertura.model';
import { AberturaService } from './shared/abertura.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { format } from 'path';

@Component({
  selector: 'app-modal-abertura-caixa',
  templateUrl: './modal-abertura-caixa.component.html',
  styleUrls: ['./modal-abertura-caixa.component.css']
})
export class ModalAberturaCaixaComponent implements OnInit {

  now = new Date();
  formatoBd: string;

  formatUsuario = new Date();
  formatUser : string;

  statusCaixa : number; // 1 ABERTO
                                   // 0 DESATIVADO

  validadorAbertura : any

  constructor(
    private aberturaService : AberturaService,
  ) {}


  ngOnInit(): void {
    this.formatoBd = formatDate(this.now, 'yyyy-MM-dd', 'en-US');
    this.formatUser = formatDate(this.formatUsuario, 'dd/MM/yyyy', 'en-US')

    this.validadorAbertura = localStorage.getItem('status')
  }

 

  dataAbertura() {
    let request : any = {
      dataAbertura : this.formatoBd,
      dataFechamento : this.formatoBd,
      filial : {
        cdFilial : 1
      },
      numeroCaixa : 1,
      operacao : {
        cdOperacao : 7,
      }
    }

    this.aberturaService.postDataAbertura(request).subscribe(); console.log(request);
    localStorage['aberturaCaixa']=JSON.stringify(request)
    alert("Caixa aberto com sucesso!")

  }

  validarAbertura() {
    if (localStorage.getItem('status') == '0') {
      this.dataAbertura()
      //this.statusCaixa = 1
      localStorage.setItem('status', '1')

    } else {
      console.log(this.statusCaixa)
      alert("Já ouve uma abertura com essa Data!")
      console.log(this.statusCaixa)
    }
  }

}

