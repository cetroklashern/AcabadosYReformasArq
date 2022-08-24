import { Component, OnInit } from '@angular/core';
import { GrupoServiceService } from '../controlador/grupo-service.service';
import { SubGrupoServiceService } from '../controlador/sub-grupo-service.service';
import { Grupo } from '../entidades/grupo';
import { SubGrupo } from '../entidades/sub-grupo';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  title = 'Acabados y Reformas Arquitectónicas S.A.S.';
  listaGrupos: Array<Grupo> = [];
  listaSubGrupos: Array<SubGrupo> = [];
  _titulo:string;  

  constructor(private serviceGrupos: GrupoServiceService, private serviceSubGrupos:SubGrupoServiceService) { 
    this._titulo = "";
  }

  ngOnInit(): void {
    let lista = [];

    this.serviceGrupos.cargarGrupos().subscribe((data: any[])=>{
      lista = data;

      for (let [key, name] of Object.entries(lista)) {
        this.listaGrupos = name;
      }
    })  

    this.serviceSubGrupos.cargarSubGrupos().subscribe((data: any[])=>{
      lista = data;

      for (let [key, name] of Object.entries(lista)) {
        this.listaSubGrupos = name;
      }
    })  
  }

  obtenerSubMenus(grupo:number): Array<SubGrupo> {
    return this.serviceSubGrupos.obtenerSubGrupoByGrupo(grupo);
  }
}
