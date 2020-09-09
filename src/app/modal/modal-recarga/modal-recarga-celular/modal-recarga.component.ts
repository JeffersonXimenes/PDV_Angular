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

  operadora: any;
  valorRecarga: number = 0;
  numeroTelefone: any;


  validar: any = {
    numeroTelefone : ""
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
    let request : Recarga = {
      operacao : {
        cdOperacao : 6
      },
      filial : {
        cdFilial : 1
      },
      recarga : {
        idRecarga: null,
        numeroTelefone: this.numeroTelefone,
        valorRecarga: this.valorRecarga,
        operadora : {
          idOperadora: this.operadora.idOperadora,
        }
      },
      dataAbertura: "",
      dataFechamento: "",
      valorDocumento: this.valorRecarga,
      flagNota: 1,
      numeroCaixa: 1,
      pagamentos:[
        {
        tipoPagamento:{
          idTipoPagamento: 4
        },
        vlPagamento: this.valorRecarga
      }
    ]
    }

    if(this.formRecarga.form.valid) {
      alert("Recarga realizada com sucesso!")
      console.log(request)
      this.recargaService.postRecarga(request).subscribe();
      //this.router.navigate(["/"]);
    } else {
      alert("Recarga não realizada! Verifique os campos.")
    }
  }

  listarOperadoras() {
    this.recargaService.getOperadoras().subscribe(response => this.responseRecargas =response); console.log();
  }
  escolhida(){
    console.log(this.operadora);
  }

  public validaNumero = ['(','0', /[0-9]/, /[0-9]/,')','9',/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/,/[0-9]/,/[0-9]/]
  public numero = [/[1-9]/, /[1-9]/,'/', /[0-9]/, /[1-9]/]
}

