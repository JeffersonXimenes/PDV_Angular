import { ResponseOperador } from './../../modal-matricula-operador/shared/operador.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recarga, ResponseRecargas } from './recarga.model';


@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/pdv/docRecarga';
  private readonly getRecarga = 'http://localhost:8080/pdv/operadoras';


  postRecarga(request: Recarga): Observable<Recarga> {
    return this.http.post<Recarga>(this.API, request);
  }

  getOperadoras() {

    return this.http.get<ResponseRecargas[]>(this.getRecarga);
  }
}
