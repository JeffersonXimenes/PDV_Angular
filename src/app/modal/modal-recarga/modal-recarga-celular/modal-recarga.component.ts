import { RecargaService } from './../shared/recarga.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Recarga, ResponseRecargas } from '../shared/recarga.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-recarga',
  templateUrl: './modal-recarga.component.html',
  styleUrls: ['./modal-recarga.component.css']
})
export class ModalRecargaComponent implements OnInit {

  @ViewChild('formRecarga', {static: true}) formRecarga: NgForm

  request : Recarga = {
    operacao : {
      cdOperacao : 6
    },
    filial : {
      cdFilial : 1
    },
    recarga : {
      idRecarga: null,
      numeroTelefone: "",
      valorRecarga: null,
      operadora : {
        idOperadora: null,
      }
    },
    dataAbertura: "",
    dataFechamento: "",
    flagNota: 1,
    numeroCaixa: 1
  }

  responseRecargas : ResponseRecargas[];

  constructor(
    private recargaService: RecargaService,
    private router: Router
    ) {}



  ngOnInit(): void {
    this.listarOperadoras()
    console.log(this.listarOperadoras())
  }

  register() : void {
    if(this.formRecarga.form.valid) {
      alert("RECARGA REALIZADA COM SUCESSO!")
      console.log(this.request)
      this.recargaService.postRecarga(this.request).subscribe();
      //this.router.navigate(["/"]);
    } else {
      alert("RECARGA NÃO REALIZADA! VERIFIQUE OS CAMPOS")
    }
  }

  listarOperadoras() {
    this.recargaService.getOperadoras().subscribe(response => this.responseRecargas =response); console.log();

    console.log(this.responseRecargas)
  }

  public validaNumero = ['(','0', /[1-9]/, /[1-9]/,')','9',/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/,/[1-9]/,/[1-9]/]
  public numero = [/[1-9]/, /[1-9]/,'/', /[0-9]/, /[1-9]/]
}

