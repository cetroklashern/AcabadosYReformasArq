import { Injectable } from '@angular/core';
import { SubGrupo } from '../entidades/sub-grupo';

@Injectable({
  providedIn: 'root'
})
export class SubGrupoServiceService {

  private _listaSubGrupos!: Array<SubGrupo>;

  public constructor() {     
    this._listaSubGrupos = [];
  }

  public get listaSubGrupos(){
    return this._listaSubGrupos;
  }

  public set listaSubGrupos(lista:SubGrupo[]){
    this._listaSubGrupos = lista;
  }
}
