import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ModalFormaPagamentoComponent } from './modal-forma-pagamento/modal-forma-pagamento.component';
import { ModalPagamentoDinheiroComponent } from './modal-pagamento-dinheiro/modal-pagamento-dinheiro.component';



export const modalVendaRoutes: Routes = [
    { path: 'home/identificaCliente/venda/formaPagamento', component:  ModalFormaPagamentoComponent},

    { path: 'home/identificaCliente/venda/formaPagamento/dinheiro', component: ModalPagamentoDinheiroComponent}
    
  
  ];
  @NgModule({
    imports: [RouterModule.forRoot(modalVendaRoutes)],
    exports:[RouterModule]
  })
export class modalRoutingModule {}
