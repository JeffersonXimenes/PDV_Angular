
import { Abertura } from './abertura.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AberturaService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:8080/pdv/DataAbertura/VAISUBIRNAO';

  postDataAbertura(request: Abertura) : Observable<Abertura> {
    return this.http.post<Abertura>(this.API, request)
  }
}
