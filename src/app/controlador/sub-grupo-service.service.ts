import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubGrupo } from '../entidades/sub-grupo';

@Injectable({
  providedIn: 'root'
})
export class SubGrupoServiceService {

  private _listaSubGrupos!: Array<SubGrupo>;
  baseUrl = environment.baseUrl;

  public constructor(public http:HttpClient) {     
    this._listaSubGrupos = [];
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",      
    } )
  };

  public get listaSubGrupos(){
    return this._listaSubGrupos;
  }

  public set listaSubGrupos(lista:SubGrupo[]){
    this._listaSubGrupos = lista;
  }  

  public cargarSubGrupos(): Observable<any> {
    console.log(`${this.baseUrl}/obtenersubgrupos.php`);
    
    return this.http.get(`${this.baseUrl}/obtenersubgrupos.php`);
  }

  public obtenerSubGrupo(idGrupo:number, idSubGrupo:number):SubGrupo{
    let subgrupoSeleccionado = this._listaSubGrupos.find(subgrupo => subgrupo.grupo == idGrupo && 
      subgrupo.id == idSubGrupo);

    if(subgrupoSeleccionado != undefined){
      return subgrupoSeleccionado;
    } else {
      return new SubGrupo();
    }
  }

  public obtenerSubGrupoByGrupo(idGrupo:number){
    let subgrupoSeleccionado = this._listaSubGrupos.filter(subgrupo => subgrupo.grupo == idGrupo);

    if(subgrupoSeleccionado != undefined){
      return subgrupoSeleccionado;
    } else {
      return new Array<SubGrupo>();
    }
  }
}
