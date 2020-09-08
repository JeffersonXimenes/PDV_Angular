import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
// import { ModalFormaPagamentoComponent } from './modal-forma-pagamento/modal-forma-pagamento.component';
import { routes } from '../app-routing.module';


export const modalVendaRoutes: Routes = [
    { path: 'home/identificaCliente/venda/formaPagamento', component:  ModalFormaPagamentoComponent},



  ];
  @NgModule({
    imports: [RouterModule.forRoot(modalVendaRoutes)],
    exports:[RouterModule]
  })
export class modalRoutingModule {}
