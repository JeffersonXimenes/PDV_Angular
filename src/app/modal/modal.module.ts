import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';



import { CommonModule } from '@angular/common';
import { ModalMatriculaOperadorComponent } from './modal-matricula-operador/modal-matricula-operador.component';



@NgModule({
  declarations: [
    ModalMatriculaOperadorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    
  ],

  providers: [],

})
export class ModalModule { }
