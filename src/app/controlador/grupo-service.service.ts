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

    this._listaGrupos.push(grupo);

    grupo = new Grupo();
    grupo.id = 2;    
    grupo.nombre = "Servicios";

    this._listaGrupos.push(grupo);
  }
}
