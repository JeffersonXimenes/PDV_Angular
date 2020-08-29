import { Filial } from './../../sidebar/shared/filial.model';
import { logging } from 'protractor';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'

import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-modal-forma-pagamento',
  templateUrl: './modal-forma-pagamento.component.html',
  styleUrls: ['./modal-forma-pagamento.component.css']
})
export class ModalFormaPagamentoComponent implements OnInit {

  // responseFilial: ResponseFilial[];

  filial = JSON.parse(localStorage['filial']);
  produto = JSON.parse(localStorage['produto']);

  constructor() {  }

  ngOnInit(): void {

    // const meuDados = JSON.parse(localStorage.getItem('nmFilial'));
    // console.log(meuDados)
    //obterStorage();


  }
  public limparStorage() {
    localStorage.clear();
  }

  // listarTodas() {
  //   this.filialService.getFilial(1).subscribe(
  //     response => {this.request = response; console.log(this.request)
  //     });

  // };


}
