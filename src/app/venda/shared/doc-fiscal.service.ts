import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocFiscal, DocFiscalResponse } from './doc-fiscal.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocFiscalService {

  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:8080/pdv/docVenda';

  createDocFiscal(request: DocFiscal): Observable<DocFiscal> {
    return this.http.post<DocFiscal>(this.API, request);
}

}
