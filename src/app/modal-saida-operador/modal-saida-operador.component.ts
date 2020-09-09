import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-saida-operador',
  templateUrl: './modal-saida-operador.component.html',
  styleUrls: ['./modal-saida-operador.component.css']
})
export class ModalSaidaOperadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saidaOperador() {
    localStorage.removeItem('operador');
    //this.router.navigate(['/home'])
    location.reload();
  }
}
