import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { MisionComponent } from './nosotros/mision/mision.component';
import { QuienesSomosComponent } from './nosotros/quienesSomos/quienes-somos.component';

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
  },
  {
    path: 'mision',
    component: MisionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,
    InicioComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
