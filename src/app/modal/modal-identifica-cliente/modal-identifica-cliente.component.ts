import { ClienteService } from './shared/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './shared/cliente.model';

@Component({
  selector: 'app-modal-identifica-cliente',
  templateUrl: './modal-identifica-cliente.component.html',
  styleUrls: ['./modal-identifica-cliente.component.css']
})
export class ModalIdentificaClienteComponent implements OnInit {

  request : any = {
    idCliente : 0,
    numeroCpf : '',
    email: '',
    idCategoriaCliente: 1,
  };

  respostaCliente : any = {
    idCliente : null,
    numeroCpf : '',
    email: ''
  };

  constructor(
    private clienteService : ClienteService,

  ) { }

  ngOnInit(): void {}

  registrarCliente() {
    this.clienteService.postCliente(this.request).subscribe(); console.log(this.request)
    alert("Cliente registrado com sucesso!")
  }

  identificaCliente(cpf) {
      this.clienteService.getCliente(cpf).subscribe(
        response => {this.respostaCliente = response; console.log(this.request);console.log(this.respostaCliente)
        if(this.respostaCliente.idCliente == null) {
          alert("Cliente não cadastrado!")
          this.registrarCliente();

        } else {
          alert("Cliente encontrado!")
          //response => {this.respostaCliente = response; console.log(this.request);console.log(this.respostaCliente)}
          let cliente = localStorage['clienteCadastrado'] = JSON.stringify(this.respostaCliente)
          location.reload()
        }
      })

    //setTimeout( () => {alert("NÃO TANKEI")}, 3000 )
    }
  }


