
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CardHomeComponent } from './card-home/card-home.component';
import { ModalAberturaCaixaComponent } from './modal/modal-abertura-caixa/modal-abertura-caixa.component';
import { ModalFechamentoCaixaComponent } from './modal/modal-fechamento-caixa/modal-fechamento-caixa.component';
import { ModalIdentificaClienteComponent } from './modal/modal-identifica-cliente/modal-identifica-cliente.component';
import { ModalRecargaComponent } from './modal/modal-recarga/modal-recarga-celular/modal-recarga.component';
import { ModalMatriculaOperadorComponent } from './modal/modal-matricula-operador/modal-matricula-operador.component';
import { VendaComponent } from './venda/venda.component';
import { ModalFormaPagamentoComponent } from './modal/modal-forma-pagamento/modal-forma-pagamento.component';
import { ModalSaidaOperadorComponent } from './modal-saida-operador/modal-saida-operador.component';
//import { ModalFormaPagamentoComponent } from './modal/modal-forma-pagamento/modal-forma-pagamento.component';
import { AuthGuardService } from './guardRoute/auth-guard.service';

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home'},
  { path: 'home', component: CardHomeComponent,},
  { path: 'home/operador', component: ModalMatriculaOperadorComponent},
  { path: 'home/recarga', component: ModalRecargaComponent, canActivate: [AuthGuardService]},
  { path: 'home/aberturaCaixa', component: ModalAberturaCaixaComponent, canActivate: [AuthGuardService]},
  { path: 'home/saidaOperador', component: ModalSaidaOperadorComponent, canActivate: [AuthGuardService]},
  { path: 'home/fechamentoCaixa', component: ModalFechamentoCaixaComponent, canActivate: [AuthGuardService]},
  { path: 'home/identificaCliente', component: ModalIdentificaClienteComponent, canActivate: [AuthGuardService]},
  { path: 'home/identificaCliente/venda', component: VendaComponent, canActivate: [AuthGuardService]
},
  //{ path: 'home/identificaCliente/venda/formaPagamento', component: ModalFormaPagamentoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
