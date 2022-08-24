import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grupo } from '../entidades/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoServiceService {

  private _listaGrupos!: Array<Grupo>;
  baseUrl = environment.baseUrl;

  public constructor(public http:HttpClient) {     
    this._listaGrupos = [];
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",      
    } )
  };

  public get listaGrupos(){
    return this._listaGrupos;
  }

  public set listaGrupos(lista:Grupo[]){
    this._listaGrupos = lista;
  }

  public cargarGrupos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/obtenergrupos.php`);
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
