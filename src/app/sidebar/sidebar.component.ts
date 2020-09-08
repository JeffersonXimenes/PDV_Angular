import { Component, OnInit } from '@angular/core';
import { FilialService } from './shared/filial.service';
import { ResponseFilial, Filial } from './shared/filial.model';
import { parse } from 'path';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public responseFilial: ResponseFilial[];

  public request: any;

  constructor(private filialService: FilialService) { }



  ngOnInit(): void {
    this.listarTodas();
    //const meuDados = JSON.parse(localStorage.getItem(this.request));
    /**
     * name
     */

  }



  listarTodas() {
    this.filialService.getFilial(1).subscribe(
      response => {this.request = response; console.log(this.request);
        let filial = localStorage['filial']=JSON.stringify(this.request);


      });

    }

}
