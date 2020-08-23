import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-recarga',
  templateUrl: './modal-recarga.component.html',
  styleUrls: ['./modal-recarga.component.css']
})
export class ModalRecargaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public validaNumero = ['(','0', /[1-9]/, /\d/,')', ' ', '9',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public numero = [/[1-9]/, /[1-9]/,'/', /[0-9]/, /[1-9]/]
}

