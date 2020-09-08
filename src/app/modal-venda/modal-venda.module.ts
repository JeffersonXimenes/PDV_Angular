import { RouterModule } from '@angular/router';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ModalFormaPagamentoComponent } from './modal-forma-pagamento/modal-forma-pagamento.component';
import { modalRoutingModule } from './modal-routing.module';



@NgModule({
  declarations: [
    // ModalFormaPagamentoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    modalRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalVendaModule { }
