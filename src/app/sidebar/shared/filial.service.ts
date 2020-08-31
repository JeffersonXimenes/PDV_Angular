import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filial, ResponseFilial} from './filial.model';

@Injectable({
    providedIn: 'root'
})
export class FilialService {

    constructor(private http: HttpClient)
    { }

    getData(key: string): any {
      return JSON.parse(localStorage.getItem(key));
    }

    private readonly API = 'http://localhost:8080/filial/';

    getFilial(cdFilial: number): Observable<ResponseFilial> {
        const URL = `${this.API}/${cdFilial}`;
        return this.http.get<ResponseFilial>(URL);
    }
}
