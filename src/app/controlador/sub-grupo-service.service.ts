import { Injectable } from '@angular/core';
import { SubGrupo } from '../entidades/sub-grupo';

@Injectable({
  providedIn: 'root'
})
export class SubGrupoServiceService {

  private _listaSubGrupos!: Array<SubGrupo>;

  public constructor() {     
    this._listaSubGrupos = [];
    this.cargarSubGrupos();
  }

  public get listaSubGrupos(){
    return this._listaSubGrupos;
  }

  public set listaSubGrupos(lista:SubGrupo[]){
    this._listaSubGrupos = lista;
  }

  private cargarSubGrupos(){
    //TODO: Cargar los datos desde base de datos
    this._listaSubGrupos = new Array<SubGrupo>();

    let grupo = new SubGrupo();
    grupo.id = 1;    
    grupo.grupo = 1;
    grupo.nombre = "Cocinas";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 2;    
    grupo.grupo = 1;
    grupo.nombre = "Baños";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 3;    
    grupo.grupo = 1;
    grupo.nombre = "Sala / Comedor";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 4;    
    grupo.grupo = 2;
    grupo.nombre = "Plomeria";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 5;    
    grupo.grupo = 2;
    grupo.nombre = "Arreglos Eléctricos";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 6;    
    grupo.grupo = 2;
    grupo.nombre = "Pintura de Zonas";

    this._listaSubGrupos.push(grupo);
  }
}
