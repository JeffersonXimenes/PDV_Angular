import { Component, OnInit } from '@angular/core';
import { ResponseFilial, Filial } from './shared/filial.model';
import { FilialService } from './shared/filial.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  responseFilial: ResponseFilial[];
  
  request: any;

  constructor(private filialService: FilialService) { }


  ngOnInit(): void {
    this.listarTodas();
  }


  listarTodas() {
    this.filialService.getFilial(1).subscribe(
      response => {this.request = response; console.log(this.request)
      });
    
  }


  // filial: Filial = {
  //   cdFilial: 1,
  //   nmFilial: '',
  //   nrCnpj: '',
  //   nrTelefone: ''
  // }
}
