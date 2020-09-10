import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocFiscal, DocFiscalResponse, NrNotaFiscal } from './doc-fiscal.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocFiscalService {

  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:8080/pdv/docVendaa';
  private readonly APINrNotaFiscal = 'http://localhost:8080/pdv/proxNum';

  createDocFiscal(request: DocFiscal): Observable<DocFiscal> {
    return this.http.post<DocFiscal>(this.API, request);
  }

  getNrNotaFiscal(id: number): Observable<NrNotaFiscal> {
    const URL = `${this.APINrNotaFiscal}/${id}`;
    return this.http.get<NrNotaFiscal>(URL);
  }
}
