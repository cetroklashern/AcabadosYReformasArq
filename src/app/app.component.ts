import { Component} from '@angular/core';
import { GrupoServiceService } from './controlador/grupo-service.service';
import { SubGrupoServiceService } from './controlador/sub-grupo-service.service';
import { Grupo } from './entidades/grupo';
import { SubGrupo } from './entidades/sub-grupo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  title = 'Acabados y Remodelaciones Arquitectónicas S.A.S.';
  serviceGrupos: GrupoServiceService = new GrupoServiceService();
  serviceSubGrupos: SubGrupoServiceService = new SubGrupoServiceService();
  listaGrupos: Array<Grupo> = [];
  listaSubGrupos: Array<SubGrupo> = new Array<SubGrupo>();  

  constructor() { 
    this.listaGrupos = this.serviceGrupos.listaGrupos;
    this.listaSubGrupos = this.serviceSubGrupos.listaSubGrupos;
  }

  obtenerSubMenus(grupo:number): Array<SubGrupo> {
    return this.listaSubGrupos.filter(subgrupo => subgrupo.grupo == grupo);
  }
}
