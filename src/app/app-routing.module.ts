import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CardHomeComponent } from './card-home/card-home.component'
import { VendaComponent } from './venda/venda.component'

export const routes: Routes = [
    {
        path: '',
        component: CardHomeComponent
    },
    {
        path: '/venda',
        component: VendaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}