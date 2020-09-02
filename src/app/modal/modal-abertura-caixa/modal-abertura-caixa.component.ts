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



  constructor(
    private aberturaService : AberturaService,
  ) {}

  ngOnInit(): void {
    this.formatoBd = formatDate(this.now, 'yyyy-MM-dd', 'en-US');
    this.formatUser = formatDate(this.formatUsuario, 'dd/MM/yyyy', 'en-US')

  }

  dataAbertura() {

    let request : any = {
      dataAbertura : this.formatoBd,
      cdFilial : 1
    }
    this.aberturaService.postDataAbertura(request).subscribe(); console.log(request);
    alert("Caixa aberto com sucesso!")
  }


}

