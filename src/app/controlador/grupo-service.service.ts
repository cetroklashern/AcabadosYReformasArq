import { Injectable } from '@angular/core';
import { Grupo } from '../entidades/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoServiceService {

  private _listaGrupos!: Array<Grupo>;

  public constructor() {     
    this._listaGrupos = [];
    this.cargarGrupos();
  }

  public get listaGrupos(){
    return this._listaGrupos;
  }

  public set listaGrupos(lista:Grupo[]){
    this._listaGrupos = lista;
  }

  private cargarGrupos(){
    //TODO: Cargar los datos desde base de datos
    this._listaGrupos = new Array<Grupo>();

    let grupo = new Grupo();
    grupo.id = 1;    
    grupo.nombre = "Ambientes";
    grupo.descripcion = "Ponemos en sus manos nuestra experienca para crear ambientes que se ajustes" + 
    " a sus sueños y necesidades.";

    this._listaGrupos.push(grupo);

    grupo = new Grupo();
    grupo.id = 2;    
    grupo.nombre = "Servicios";
    grupo.descripcion = "Contamos con personal capacitado y con experiencia para solucionar cualquier emergencia, " + 
    "reparación y mantenimiento de tus espacios, instalaciones eléctricas, plomería, tuberias de gas y mucho más.";

    this._listaGrupos.push(grupo);
  }

  public obtenerGrupo(idGrupo:number):Grupo{
    let grupoSeleccionado = this._listaGrupos.find(grupo => grupo.id == idGrupo);

    if(grupoSeleccionado != undefined){
      return grupoSeleccionado;
    } else {
      return new Grupo();
    }
  }
}
