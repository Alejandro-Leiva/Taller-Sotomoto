import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { HomeComponent } from './Componentes/home/home.component';
import { MapsComponent } from './Componentes/maps/maps.component';
import { TiendaComponent } from './Componentes/tienda/tienda.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'tienda', component: TiendaComponent },
  { path:'contacto', component: ContactoComponent },
  { path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
