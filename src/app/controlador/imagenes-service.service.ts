import { Injectable } from '@angular/core';
import { Imagen } from 'src/app/entidades/imagen';
import { SubGrupoServiceService } from './sub-grupo-service.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenesServiceService {  
  private _listaImagenes!: Array<Imagen>;
  private _serviceSubGrupos!: SubGrupoServiceService;

  public constructor() {     
    this._listaImagenes = [];
  }

  public get listaImagenes(){
    return this._listaImagenes;
  }

  public set listaImagenes(lista:Imagen[]){
    this._listaImagenes = lista;
  }
  
  public obtenerImagenes(grupo: number, subGrupo: number, pagina: number): Imagen[] {    
    this.cargarImagenes();
    let listaResultado;

    if(pagina == 0){
      listaResultado = this._listaImagenes.filter(imagen => imagen.grupo == grupo && imagen.subGrupo == subGrupo).
        sort((imagen1, imagen2) => imagen2.fecha.getTime() - imagen1.fecha.getTime(),).
        slice(0,6);
    } else {
      listaResultado = this._listaImagenes.filter(imagen => imagen.grupo == grupo && imagen.subGrupo == subGrupo).
        sort((imagen1, imagen2) => imagen2.fecha.getTime() - imagen1.fecha.getTime(),).
        slice(6 * pagina, (6 * pagina) + 6);
    }

    while(listaResultado.length < 6){
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
    this.cargarImagenes();
    this._serviceSubGrupos = new SubGrupoServiceService();
    let listaSubGrupos = this._serviceSubGrupos.listaSubGrupos;
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
    
    return listaImagenesFiltrada.slice(0,6);
  }

  private cargarImagenes(){
    //TODO: Cargar los datos desde base de datos
    this._listaImagenes = new Array<Imagen>();

    let imagen = new Imagen();    
    imagen.id = 1;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina integral 1";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 1";
    imagen.fecha = new Date("05/08/2022");

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
    imagen.fecha = new Date("03/08/2022");

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
    imagen.fecha = new Date("15/07/2022");

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
    imagen.fecha = new Date("16/05/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 5;
    imagen.archivo = "fotoBanio2.jpeg";
    imagen.descripcion = "Baño 2";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 2;
    imagen.nombreSubGrupo = "Baños";
    imagen.nombre = "Baño 2";
    imagen.fecha = new Date("10/08/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 6;
    imagen.archivo = "fotoBanio3.jpeg";
    imagen.descripcion = "Baño 3";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 2;
    imagen.nombreSubGrupo = "Baños";
    imagen.nombre = "Baño 3";
    imagen.fecha = new Date("09/07/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 7;
    imagen.archivo = "LogoAcabadosyReformas.jpeg";
    imagen.descripcion = "Baño 4";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 2;
    imagen.nombreSubGrupo = "Baños";
    imagen.nombre = "Baño 4";
    imagen.fecha = new Date("23/07/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 8;
    imagen.archivo = "LogoAcabadosyReformas.jpeg";
    imagen.descripcion = "Cocina 4";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 4";
    imagen.fecha = new Date("23/07/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 9;
    imagen.archivo = "LogoAcabadosyReformas.jpeg";
    imagen.descripcion = "Cocina 5";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 5";
    imagen.fecha = new Date("30/06/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 10;
    imagen.archivo = "fotoCocina3.jpeg";
    imagen.descripcion = "Cocina 6";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 6";
    imagen.fecha = new Date("28/07/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 11;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina 7";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 7";
    imagen.fecha = new Date("10/08/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 12;
    imagen.archivo = "fotoCocina3.jpeg";
    imagen.descripcion = "Cocina 8";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 8";
    imagen.fecha = new Date("10/07/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 13;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina 9";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 9";
    imagen.fecha = new Date("11/08/2022");

    this._listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 13;
    imagen.archivo = "fotoCocina3.jpeg";
    imagen.descripcion = "Cocina 10";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 10";
    imagen.fecha = new Date("12/06/2022");

    this._listaImagenes.push(imagen);
  }
}
