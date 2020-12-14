import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { TiendaComponent } from './Componentes/tienda/tienda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { MapsComponent } from './Componentes/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { FiltroTiendaPipe } from './pipe/filtro-tienda.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    TiendaComponent,
    MapsComponent,
    FiltroTiendaPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1rFLDqjnHOEjw4AXMYO7DGO5LGNorr2A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
