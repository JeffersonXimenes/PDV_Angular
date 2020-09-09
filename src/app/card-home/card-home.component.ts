
import { Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Injectable } from '@angular/core';

import { Global, FechamentoCaixa } from "../global";



@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})

@Injectable()
export class CardHomeComponent implements OnInit {

@ViewChild('formValidarCard', {static: true}) formValidarCard : NgForm

  constructor(private router : Router) { }

  totalFecha : number = 0
  guardarAqui : number = 0 // QUANDO INICIAR A PÁGINA VAI SER GUARDADA AQUI


  public totalValores : Array <number> = [];



  //guardarAqui : Array <any> = []
  ngOnInit(): void {
    this.guardarValores()
    //console.log(this.totalValores)
    //console.log(Global.totalFechamentoCaixa.push())
    console.log(FechamentoCaixa.totalFechamento)
    console.log(localStorage.getItem('totalValores').length)
    console.log(FechamentoCaixa.soma.length)
  }

  guardarValores () {

    //localStorage['totalValores'] = JSON.stringify(this.totalValores)
    //CASO O CÓDIGO BUGAR ATIVA ESSA PARADA AQUI QUE TA EM CIMA DPS DE ATIVAR É SÓ DESATIVAR QUANDO A PÁGINA CARREGAR
    //this.guardarAqui = JSON.parse(localStorage.getItem('vendas'))
    this.totalValores = JSON.parse(localStorage.getItem('totalValores'))
    this.totalValores.push(this.guardarAqui)
    localStorage['totalValores'] = JSON.stringify(this.totalValores)
    console.log(FechamentoCaixa.totalFechamento)
    localStorage.setItem('vendas', '')


  }

  validarCard(rota : string) {
    if(localStorage.getItem('operador') == null) {
      alert("Função habilitada apenas com operador logado!")
      //this.router.navigate([`/home`]);
    } else {
        if (rota == 'recarga'){
        this.router.navigate(['recarga'])
      } if (rota == 'identificaCliente') {
        this.router.navigate(['identificaCliente'])
      } if (rota == 'saidaOperador') {
        this.router.navigate(['saidaOperador'])
      }
    }
  }

}



