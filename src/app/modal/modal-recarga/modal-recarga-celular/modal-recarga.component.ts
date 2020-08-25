import { RecargaService } from './../shared/recarga.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Recarga } from '../shared/recarga.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-recarga',
  templateUrl: './modal-recarga.component.html',
  styleUrls: ['./modal-recarga.component.css']
})
export class ModalRecargaComponent implements OnInit {

  @ViewChild('formRecarga', {static: true}) formRecarga: NgForm

  request: Recarga = {
    //idRecarga: null,
    numeroTelefone: "",
    valorRecarga: null,
    idOperadora: null, // OPERADORA VIVO
  }

  constructor(
    private recargaService: RecargaService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  register() : void {
    if(this.formRecarga.form.valid) {
      alert("recarga realizada")
      this.recargaService.postRecarga(this.request).subscribe();
      //this.router.navigate(["/"]);
    }

  }

  public validaNumero = ['(','0', /[1-9]/, /[1-9]/,')','9',/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/,/[1-9]/,/[1-9]/]
  public numero = [/[1-9]/, /[1-9]/,'/', /[0-9]/, /[1-9]/]
}

