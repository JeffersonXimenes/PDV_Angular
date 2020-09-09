import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto, ResponseProduto } from './produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/produtos';



  getProduto(id: number): Observable<ResponseProduto> {
    const URL = `${this.API}/${id}`;

    return this.http.get<ResponseProduto>(URL);
  }


}