import { Injectable } from '@angular/core';
import { Imagen } from 'src/app/entidades/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenesServiceService {  
  private _listaImagenes!: Array<Imagen>;

  public constructor() {     
    this._listaImagenes = [];
  }

  public get listaImagenes(){
    return this._listaImagenes;
  }

  public set listaImagenes(lista:Imagen[]){
    this._listaImagenes = lista;
  }
  
  public obtenerImagenes(grupo: number, subGrupo: number): Imagen[] {    
    this.cargarImagenes();

    return this._listaImagenes.filter(imagen => imagen.grupo == grupo && imagen.subGrupo == subGrupo);
  }

  private cargarImagenes(){
    //TODO: Cargar los datos desde base de datos
    this._listaImagenes = new Array<Imagen>();

    let imagen = new Imagen();
    imagen.id = 0;
    imagen.archivo = "LogoAcabadosyReformas.jpeg";
    imagen.descripcion = "Imagen por defecto";
    imagen.grupo = 0;
    imagen.nombreGrupo = "";
    imagen.subGrupo = 0;
    imagen.nombreSubGrupo = "";
    imagen.nombre = "Por Defecto";

    imagen = new Imagen();
    imagen.id = 1;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina integral 1";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 1";

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 2;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina integral 2";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 2";

    this._listaImagenes.push(imagen);    

    imagen = new Imagen();
    imagen.id = 3;
    imagen.archivo = "fotoCocina3.jpeg";
    imagen.descripcion = "Cocina integral 3";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 3";

    this._listaImagenes.push(imagen);    

    imagen = new Imagen();
    imagen.id = 4;
    imagen.archivo = "fotoBanio1.jpeg";
    imagen.descripcion = "Baño 1";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 2;
    imagen.nombreSubGrupo = "Baños";
    imagen.nombre = "Baño 1";

    this._listaImagenes.push(imagen);
  }
}
