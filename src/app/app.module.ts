import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './nosotros/quienesSomos/quienes-somos.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './cabecera/cabecera.component';

const router: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio/:opcion/:grupo/:subgrupo',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactanosComponent
  },
  {
    path: 'quienesSomos',
    component: QuienesSomosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,
    InicioComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router, {onSameUrlNavigation: 'reload'}),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
