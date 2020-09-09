import { RouterModule } from '@angular/router';
import { ModalRecargaComponent } from './modal-recarga/modal-recarga-celular/modal-recarga.component';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { ModalMatriculaOperadorComponent } from './modal-matricula-operador/modal-matricula-operador.component';
import { RecargaService } from './modal-recarga/shared/recarga.service';



@NgModule({
  declarations: [
    ModalMatriculaOperadorComponent,
    ModalRecargaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TextMaskModule,
    

  ],

  providers: [
    RecargaService,
    RouterModule,
  ],

})
export class ModalModule { }
