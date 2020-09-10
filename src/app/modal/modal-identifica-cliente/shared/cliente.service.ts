import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ResponseClientesCadastrados } from './cliente.model'
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:8080/pdv/Cliente';
  private readonly APICPF = 'http://localhost:8080/pdv/cliente'


  postCliente(request : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, request);
  }


  getCliente(cpfCliente : string): Observable <ResponseClientesCadastrados> {
    const URL = `${this.APICPF}/${cpfCliente}`;
    return this.http.get<ResponseClientesCadastrados>(URL);
  }


}
