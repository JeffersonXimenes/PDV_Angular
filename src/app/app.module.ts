import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VendaComponent } from './venda/venda.component';
import { ModalMatriculaOperadorComponent } from './modal/modal-matricula-operador/modal-matricula-operador.component';
import { ModalRecargaComponent } from './modal/modal-recarga/modal-recarga.component';
import { ModalAberturaCaixaComponent } from './modal/modal-abertura-caixa/modal-abertura-caixa.component';
import { ModalFechamentoCaixaComponent } from './modal/modal-fechamento-caixa/modal-fechamento-caixa.component';
import { ModalIdentificaClienteComponent } from './modal/modal-identifica-cliente/modal-identifica-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardHomeComponent,
    SidebarComponent,
    VendaComponent,
    ModalMatriculaOperadorComponent,
    ModalRecargaComponent,
    ModalAberturaCaixaComponent,
    ModalFechamentoCaixaComponent,
    ModalIdentificaClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
