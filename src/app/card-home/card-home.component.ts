import { Component, OnInit } from '@angular/core';
import { Cards } from './card.models';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  // card: Cards[] = [
  //   {
  //     cardTitle: "RECARREGUE JÁ",
  //     cardText: "Recarga de Celular",
  //     cardTitle2: "MÍNIMO",
  //     cardTitle3: "R$ 20,00"
  //   },
  //   {
  //     cardTitle: "BORA TRABALHAR",
  //     cardText: "Abertura de Caixa",
  //     cardTitle2: "",
  //     cardTitle3: ""
  //   },
  //   {
  //     cardTitle: "DESCANSO",
  //     cardText: "Fechamento de Caixa",
  //     cardTitle2: "",
  //     cardTitle3: ""
  //   }
  // ]


  // card2: Cards[] = [
  //   {
  //     cardTitle: "CLIENTE DROGASIL",
  //     cardText: "Identifica Cliente",
  //     cardTitle2: "DESCONTOS DE ATÉ",
  //     cardTitle3: "R$ 10,00"
  //   },
  //   {

  //     cardTitle: "É DIA DE QUEM?",
  //     cardText: "Entrada de Operador",
  //     cardTitle2: "",
  //     cardTitle3: ""
  //   }
  // ]

}

