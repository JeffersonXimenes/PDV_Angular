
import { Abertura } from './abertura.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AberturaService {
  constructor(private http: HttpClient) {}

  private readonly APIAbertura = 'http://localhost:8080/pdv/DataAbertura';
  private readonly APIFechamento = 'http://localhost:8080/pdv/DataFechamento'

  postDataAbertura(request: Abertura) : Observable<Abertura> {
    return this.http.post<Abertura>(this.APIAbertura, request)
  }

  postDataFechamento(request: Abertura) : Observable<Abertura> {
    return this.http.post<Abertura>(this.APIFechamento, request)
  }

}
