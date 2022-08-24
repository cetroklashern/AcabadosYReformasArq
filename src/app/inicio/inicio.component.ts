import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router} from '@angular/router';
import { interval } from 'rxjs';
import { GrupoServiceService } from '../controlador/grupo-service.service';
import { ImagenesServiceService } from '../controlador/imagenes-service.service';
import { SubGrupoServiceService } from '../controlador/sub-grupo-service.service';
import { Imagen } from '../entidades/imagen';
declare let require: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  _titulo:string;  
  _servicios:string;  
  _listaImagenes:Array<string> = [];
  _textoServicio:boolean;
  _rodillo:boolean;

  @Output() 
  messageEvent = new EventEmitter<string>();

  prueba = "Inicio";
  grupoSeleccionado = 0;
  subGrupoSeleccionado = 0;  
  opcionSeleccionada = "";

  constructor(private rutaActiva: ActivatedRoute, private router: Router, 
    private servicioGrupos:GrupoServiceService, private servicioSubGrupos:SubGrupoServiceService,
    private servicioImagenes: ImagenesServiceService) { 
    this._textoServicio = false;  
    this._rodillo = false;  
    this._titulo = "";
    this._servicios = "";
    this._listaImagenes = [];
  }

  ngOnInit(): void { 
    let lista = [];


    let datosCargados = false;

    this.rutaActiva.params.subscribe(routeParams => {
      this.grupoSeleccionado = routeParams['grupo'];
      this.subGrupoSeleccionado = routeParams['subgrupo'];
      this.opcionSeleccionada = routeParams['opcion'];    

      this._rodillo = true;
      console.log("VALIDAR IMAGENES");
      if(this.servicioImagenes.listaImagenes.length > 0 && 
        this.servicioSubGrupos.listaSubGrupos.length > 0 && 
        this.servicioGrupos.listaGrupos.length > 0){
        console.log("HAY IMAGENES");
        this.cargarDatos(this.opcionSeleccionada, this.grupoSeleccionado, this.subGrupoSeleccionado);
      } else {        
        console.log("NO HAY IMAGENES");
        setTimeout(()=>{
          console.log("LLAMADO DESPUES DE TIMEOUT");
          this.cargarDatos(this.opcionSeleccionada, this.grupoSeleccionado, this.subGrupoSeleccionado);
      },1000);
      }
    });

    this.servicioGrupos.cargarGrupos().subscribe((data: any[])=>{
      lista = data;

      for (let [key, name] of Object.entries(lista)) {
        this.servicioGrupos.listaGrupos = name;
      }
    })  

    this.servicioSubGrupos.cargarSubGrupos().subscribe((data: any[])=>{
      lista = data;

      for (let [key, name] of Object.entries(lista)) {
        this.servicioSubGrupos.listaSubGrupos = name;
      }
    })  

    this.servicioImagenes.cargarImagenes().subscribe((data: any[])=>{
      lista = data;
      
      for (let [key, name] of Object.entries(lista)) {
        this.servicioImagenes.listaImagenes = name;
      }
    })  
  }

  private cargarDatos(opcion:string, grupo:number, subgrupo:number): void {    
    console.log("CANTIDAD GRUPOS: " + this.servicioGrupos.listaGrupos.length);
    console.log("CANTIDAD SUBGRUPOS: " + this.servicioSubGrupos.listaSubGrupos.length);
    console.log("CANTIDAD IMAGENES: " + this.servicioImagenes.listaImagenes.length);
    this._titulo = opcion;    
    this._textoServicio = true;
    this._listaImagenes = new Array<string>();
    let imagenes = new Array<Imagen>();

    if(opcion == "0" || opcion == undefined){
      this._titulo = "Atrévete a soñar, nosotros te ayudamos a construir tus sueños.";
      this._textoServicio = false;

      imagenes = this.servicioImagenes.obtenerImagenesAleatorias();
    } else if(grupo == 1) {      
      imagenes = this.servicioImagenes.obtenerImagenes(grupo, subgrupo,0);
      switch("" + subgrupo){
        case "1": 
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "2":     
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "3":
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "4":
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "5":
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "6":
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        default:       
          imagenes = this.servicioImagenes.obtenerImagenesAleatoriasGrupo(grupo);
          this._servicios = this.obtenerServicioGrupo(grupo);
          break;
      }
    } else if(grupo == 2){
      imagenes = this.servicioImagenes.obtenerImagenes(grupo, subgrupo,0);
      switch("" + subgrupo){
        case "1":
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "2":
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "3":      
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        default:
          imagenes = this.servicioImagenes.obtenerImagenesAleatoriasGrupo(grupo);
          this._servicios = this.obtenerServicioGrupo(grupo);
          break;
      }
    }

    imagenes.forEach(imagen => {  
      let ubicacion = "/assets/LogoAcabadosyReformas.jpeg";
      
      if(imagen.archivo.indexOf("LogoAcabadosyReformas") == -1){
        ubicacion = "/assets/" + imagen.nombreSubGrupo + "/" + imagen.archivo;
      } 
      this._listaImagenes.push(ubicacion);
    });

    this._rodillo = false;
  }  

  private obtenerServicioGrupo(idGrupo:number): string {
    let grupo = this.servicioGrupos.obtenerGrupo(idGrupo);

    return grupo.descripcion;
  }

  private obtenerServicioSubGrupo(idGrupo:number, idSubgrupo:number): string {
    let grupo = this.servicioSubGrupos.obtenerSubGrupo(idGrupo, idSubgrupo);

    return grupo.descripcion;
  }
}