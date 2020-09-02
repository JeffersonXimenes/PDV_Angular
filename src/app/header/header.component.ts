import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  operador : any

  imgUrl = "/Users/Treinamento/Documents/PDV/static/img/logo.png"

  ngOnInit(): void {
    this.operador = JSON.parse(localStorage['operador']);
  }
}
