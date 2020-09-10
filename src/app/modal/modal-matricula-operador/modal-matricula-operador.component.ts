import { ResponseOperador } from './shared/operador.model';
import { OperadorService } from './shared/operador.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-matricula-operador',
  templateUrl: './modal-matricula-operador.component.html',
  styleUrls: ['./modal-matricula-operador.component.css']
})
export class ModalMatriculaOperadorComponent implements OnInit {
  //nmMatricula : number;
  request : any;
  responseOperador : ResponseOperador[]
  nmMatricula : string;
  validador : number = 0
  idOperadora : number = 0

  constructor(
    private operadorService : OperadorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.buscarOperador();
  }

  buscarOperador() {

    this.operadorService.getOperador(this.nmMatricula).subscribe(
      response => {this.request = response; console.log(this.request);

        if (this.request.numeroMatricula == null ) {
          alert("Operador não encontrado!")
        } if (this.request.idOperador && this.request.numeroMatricula != null) {
          let operador = localStorage ['operador'] = JSON.stringify(this.request);
          location.reload()
          alert("Operador logado!")
        }});
    }




}
