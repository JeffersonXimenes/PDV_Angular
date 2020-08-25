import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recarga } from './recarga.model';


@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/pdv/recarga';

  postRecarga(request: Recarga): Observable<Recarga> {
    return this.http.post<Recarga>(this.API, request);
  }
}
