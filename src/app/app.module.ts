import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { MisionComponent } from './nosotros/mision/mision/mision.component';
import { QuienesSomosComponent } from './nosotros/quienesSomos/quienes-somos/quienes-somos.component';
import { VisionComponent } from './nosotros/vision/vision/vision.component';
import { AcabadosComponent } from './servicios/acabados/acabados/acabados.component';
import { ElectricosComponent } from './servicios/electricos/electricos/electricos.component';
import { PlomeriaComponent } from './servicios/plomeria/plomeria/plomeria.component';
import { BaniosComponent } from './ambientes/baños/banios/banios.component';
import { CocinasComponent } from './ambientes/cocinas/cocinas/cocinas.component';
import { SalaComedorComponent } from './ambientes/salaComedor/sala-comedor/sala-comedor.component';
import { ServiciosComponent } from './servicios/servicios/servicios.component';
import { AmbientesComponent } from './ambientes/ambientes/ambientes.component';

const router: Routes = [
  {
    path: 'inicio',
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
  },
  {
    path: 'vision',
    component: VisionComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'plomeria',
    component: PlomeriaComponent
  },
  {
    path: 'electricos',
    component: ElectricosComponent
  },
  {
    path: 'acabados',
    component: AcabadosComponent
  },
  {
    path: 'ambientes',
    component: AmbientesComponent
  },
  {
    path: 'cocinas',
    component: CocinasComponent
  },
  {
    path: 'banios',
    component: BaniosComponent
  },
  {
    path: 'salaComedor',
    component: SalaComedorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,
    InicioComponent,
    MisionComponent,
    AcabadosComponent,
    ElectricosComponent,
    PlomeriaComponent,
    BaniosComponent,
    CocinasComponent,
    SalaComedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
