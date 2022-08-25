import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from 'src/app/entidades/imagen';
import { environment } from 'src/environments/environment';
import { SubGrupoServiceService } from './sub-grupo-service.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenesServiceService {  
  private _listaImagenes!: Array<Imagen>;
  baseUrl = environment.baseUrl;

  public constructor(public http:HttpClient, public serviceSubGrupos:SubGrupoServiceService) {        
    this._listaImagenes = [];
  }

  public get listaImagenes(){
    return this._listaImagenes;
  }

  public set listaImagenes(lista:Imagen[]){
    this._listaImagenes = lista;
  }

  public cargarImagenesByGrupo(grupo: number, subGrupo: number): Observable<any> {
    console.log(`${this.baseUrl}/obtenerimagenesbygrupo.php?idGrupo=${grupo}&idSubGrupo=${subGrupo}`);
    return this.http.get(`${this.baseUrl}/obtenerimagenesbygrupo.php?idGrupo=${grupo}&idSubGrupo=${subGrupo}`);
  }

  public cargarImagenes(): Observable<any> {
    console.log(`${this.baseUrl}/obtenerimagenesbygrupo.php`);
    return this.http.get(`${this.baseUrl}/obtenerimagenesbygrupo.php`);
  }
  
  public obtenerImagenes(grupo: number, subGrupo: number, pagina: number): Imagen[] {  
    let listaResultado;

    if(pagina == 0){
      listaResultado = this._listaImagenes.filter(imagen => imagen.grupo == grupo && imagen.subGrupo == subGrupo).
        sort((imagen1, imagen2) => new Date(imagen2.fecha).getTime() - new Date(imagen1.fecha).getTime(),).
        slice(0,9);
    } else {
      listaResultado = this._listaImagenes.filter(imagen => imagen.grupo == grupo && imagen.subGrupo == subGrupo).
        sort((imagen1, imagen2) => new Date(imagen2.fecha).getTime() - new Date(imagen1.fecha).getTime(),).
        slice(9 * pagina, (9 * pagina) + 9);
    }

    while(listaResultado.length < 9){
      listaResultado.push(this.obtenerImagenPorDefecto());
    }

    return listaResultado;
  } 

  public obtenerImagenPorDefecto(): Imagen {    
    let imagen = new Imagen();
    imagen.archivo = "LogoAcabadosyReformas.jpeg";
    imagen.descripcion = "Imagen por defecto";
    imagen.nombre = "Por Defecto";

    return imagen;
  }

  public obtenerImagenesAleatorias(): Imagen[] {    
    let listaSubGrupos = this.serviceSubGrupos.listaSubGrupos;
    let listaImagenesFiltrada = new Array<Imagen>();

    let cantidadSubGrupos = listaSubGrupos.length;
    
    if(cantidadSubGrupos < 6){
      listaSubGrupos.forEach(subGrupo => {
        listaImagenesFiltrada.push.apply(listaImagenesFiltrada, this.obtenerImagenes(subGrupo.grupo, subGrupo.id, 0).slice(0,2));
      });
    } else {
      listaSubGrupos.forEach(subGrupo => {
        listaImagenesFiltrada.push.apply(listaImagenesFiltrada, this.obtenerImagenes(subGrupo.grupo, subGrupo.id, 0).slice(0,1));
      });
    }
    
    return listaImagenesFiltrada.slice(0,9);
  }

  public obtenerImagenesAleatoriasGrupo(grupo: number): Imagen[] {  
    let listaSubGrupos = this.serviceSubGrupos.listaSubGrupos.filter(subgrupo => subgrupo.grupo == grupo);
    let listaImagenesFiltrada = new Array<Imagen>();

    let cantidadSubGrupos = listaSubGrupos.length;
    let cantidadImagenes:number = +(listaSubGrupos.length/6).toFixed();
    
    if(cantidadSubGrupos < 6){
      listaSubGrupos.forEach(subGrupo => {
        listaImagenesFiltrada.push.apply(listaImagenesFiltrada, this.obtenerImagenes(subGrupo.grupo, subGrupo.id, 0).slice(0,2));
      });
    } else {
      if(cantidadImagenes > 2) {
        listaSubGrupos.forEach(subGrupo => {
          listaImagenesFiltrada.push.apply(listaImagenesFiltrada, this.obtenerImagenes(subGrupo.grupo, subGrupo.id, 0).slice(0,1));
        });
      } else {
        listaSubGrupos.forEach(subGrupo => {
          listaImagenesFiltrada.push.apply(listaImagenesFiltrada, this.obtenerImagenes(subGrupo.grupo, subGrupo.id, 0).slice(0,2));
        });  
      }
    }
    
    return listaImagenesFiltrada.slice(0,9);
  }
}
