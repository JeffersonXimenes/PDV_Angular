import { ResponseOperador } from './operador.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:8080/pdv/operador';

  getOperador(nmMatricula: string): Observable<ResponseOperador> {
    const URL = `${this.API}/${nmMatricula}`;
    console.log(URL);
    return this.http.get<ResponseOperador>(URL);

  }

}
