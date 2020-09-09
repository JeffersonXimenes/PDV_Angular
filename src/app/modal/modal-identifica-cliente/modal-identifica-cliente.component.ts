import { ClienteService } from './shared/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './shared/cliente.model';

@Component({
  selector: 'app-modal-identifica-cliente',
  templateUrl: './modal-identifica-cliente.component.html',
  styleUrls: ['./modal-identifica-cliente.component.css']
})
export class ModalIdentificaClienteComponent implements OnInit {

  request : Cliente = {
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

  registrarCliente() : void {
    this.clienteService.postCliente(this.request).subscribe();
    alert("Cliente registrado com sucesso!")
  }

  identificaCliente(cpf) {
    
      this.clienteService.getCliente(cpf).subscribe(
        response => {this.respostaCliente = response; console.log(this.request);console.log(this.respostaCliente)
        if(this.respostaCliente.idCliente == null) {
          alert("Cliente não cadastrado!")
          this.registrarCliente();
          let clienteNaoCadastrado = localStorage['clienteNAOCadastrado'] = JSON.stringify(this.respostaCliente)
        } else {
          alert("Cliente encontrado!")
          //response => {this.respostaCliente = response; console.log(this.request);console.log(this.respostaCliente)}
          let cliente = localStorage['clienteCadastrado'] = JSON.stringify(this.respostaCliente)
        }
      })
    //setTimeout( () => {alert("NÃO TANKEI")}, 3000 )
    }
  }


