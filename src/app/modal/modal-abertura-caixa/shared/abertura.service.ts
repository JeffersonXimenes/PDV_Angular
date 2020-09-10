
import { Abertura } from './abertura.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AberturaService {
  constructor(private http: HttpClient) {}

  private readonly APIdataAbertura = 'http://localhost:8080/pdv/dataAbertura';
  private readonly APIdataFechamento = 'http://localhost:8080/pdv/dataFechamento';

  postDataAbertura(request: Abertura) : Observable<Abertura> {
    return this.http.post<Abertura>(this.APIdataAbertura, request)
  }

  postDataFechamento(request: Abertura) : Observable<Abertura> {
    return this.http.post<Abertura>(this.APIdataFechamento, request)
  }
}
