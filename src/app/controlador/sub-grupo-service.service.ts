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
    grupo.descripcion = "Fabricación e instalación de muebles de cocina, instalación de electrodomesticos," + 
    "adecuación de espacios, iluminación de cocina, cambio de pisos y enchapes, y más.";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 2;    
    grupo.grupo = 1;
    grupo.nombre = "Interiores";
    grupo.descripcion = "Creación de ambientes interiores únicos, con acabados que se ajusten a " +
    "sus gustos, construcción de chimeneas, muebles de entretenimiento, zona de bebidas, " + 
    "moderna iluminación y más.";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 3;    
    grupo.grupo = 1;
    grupo.nombre = "Exteriores";
    grupo.descripcion = "Creación de ambientes exteriores soñados, desde piscinas, zonas de parrilla, " + 
    "halls que enmarquen la vista de tu hogar.";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 4;    
    grupo.grupo = 1;
    grupo.nombre = "Escaleras";
    grupo.descripcion = "Diseñamos y construimos escaleras que den un toque de distinción para conectar " + 
    "los diferentes espacios de tu hogar.";

    this._listaSubGrupos.push(grupo);   
    
    grupo = new SubGrupo();
    grupo.id = 5;    
    grupo.grupo = 1;
    grupo.nombre = "Baños";
    grupo.descripcion = "Fabricación e instalación de muebles de baño, fabricación de lavamanos," + 
    " en material de diseño exclusivo, instalación de duchas, bañeras, jacuzzi y más.";

    this._listaSubGrupos.push(grupo);  

    grupo = new SubGrupo();
    grupo.id = 6;    
    grupo.grupo = 1;
    grupo.nombre = "Habitaciones";
    grupo.descripcion = "Convertiremos tu habitación en tu sitio favorito, fabricación de muebles, vestier y closet " + 
    "a la medida, aprovechamiento máximo de los espacios.";

    this._listaSubGrupos.push(grupo);  

    grupo = new SubGrupo();
    grupo.id = 1;    
    grupo.grupo = 2;
    grupo.nombre = "Plomería";
    grupo.descripcion = "Reparamos, modificamos y actualizamos tus instalaciones de agua, lavaplatos, lavamanos y " + 
    "lavaderos. Te asesoramos en cualquier solución o reparación que requieras realizar.";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 2;    
    grupo.grupo = 2;
    grupo.nombre = "Arreglos Eléctricos";
    grupo.descripcion = "Reparamos, modificamos y actualizamos tus instalaciones eléctricas, cambiamos e instalamos " + 
    "dispositivos electricos y electrónicos. Te asesoramos en cualquier solución o reparación que requieras realizar.";

    this._listaSubGrupos.push(grupo);

    grupo = new SubGrupo();
    grupo.id = 3;    
    grupo.grupo = 2;
    grupo.nombre = "Pintura de Zonas";
    grupo.descripcion = "Te prestamos servicios de pintura de zonas, estuco, reparación de esquinas, cambio " + 
    "de texturas en paredes y techo.";

    this._listaSubGrupos.push(grupo);
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
}
