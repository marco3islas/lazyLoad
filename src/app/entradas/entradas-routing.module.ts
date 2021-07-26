import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgregarComponent} from './pages/agregar/agregar.component';
import {EntradaComponent} from './pages/entrada/entrada.component';
import {HomeComponent} from './pages/home/home.component';
import {ListadoComponent} from './pages/listado/listado.component';

const routes: Routes =[

    {
        path:'',
        component: HomeComponent,
        children:[
            {
                path: 'agregar',
                component: AgregarComponent
            },
            {
                path: 'listado',
                component: ListadoComponent
            },
            {
                path: 'entrada',
                component: EntradaComponent
            }
        ]
    }
    
]



@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EntradasRoutingModule { }
