import { Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cards } from './card.models';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

@ViewChild('formValidarCard', {static: true}) formValidarCard : NgForm

  constructor(private router : Router) { }

  ngOnInit(): void {
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

