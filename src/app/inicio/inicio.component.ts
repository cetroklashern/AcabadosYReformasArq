import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GrupoServiceService } from '../controlador/grupo-service.service';
import { ImagenesServiceService } from '../controlador/imagenes-service.service';
import { SubGrupoServiceService } from '../controlador/sub-grupo-service.service';
declare let require: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  _titulo:string;  
  _servicios:string;  
  _imagen1:string;
  _elementInicio:boolean;
  _elementCocina:boolean;
  _elementAmbientes:boolean;
  _elementInteriores:boolean;
  _elementExteriores:boolean;
  _elementEscaleras:boolean;
  _elementBanios:boolean;
  _elementHabitacion:boolean;
  _elementServicios:boolean;
  _elementElectricos:boolean;
  _elementPintura:boolean;
  _elementPlomeria:boolean;
  _textoServicio:boolean;
  @Output() 
  messageEvent = new EventEmitter<string>();

  prueba = "Inicio";
  grupoSeleccionado = 0;
  subGrupoSeleccionado = 0;
  servicioImagenes: ImagenesServiceService;
  servicioGrupos:GrupoServiceService;
  servicioSubGrupos:SubGrupoServiceService;

  constructor(private rutaActiva: ActivatedRoute, private router: Router) { 
    /* TODO document why this constructor is empty */  
    this._elementInicio = false;
    this._elementAmbientes = false;
    this._elementCocina = false;
    this._elementInteriores = false;
    this._elementExteriores = false;
    this._elementEscaleras = false;
    this._elementBanios = false;
    this._elementHabitacion = false;    
    this._elementServicios = false;
    this._elementElectricos = false;
    this._elementPintura = false;
    this._elementPlomeria = false;
    this._textoServicio = false;    
    this._titulo = "";
    this._servicios = "";
    this._imagen1 = "";
    this.servicioImagenes = new ImagenesServiceService();    
    this.servicioGrupos = new GrupoServiceService();
    this.servicioSubGrupos = new SubGrupoServiceService();
  }

  ngOnInit(): void {   
    this.grupoSeleccionado = this.rutaActiva.snapshot.params['grupo'];
    this.subGrupoSeleccionado = this.rutaActiva.snapshot.params['subgrupo'];  
    
    this.rutaActiva.params.subscribe(routeParams => {
      this.cargarDatos(routeParams['opcion'], routeParams['grupo'], routeParams['subgrupo']);
    });
  }

  private cargarDatos(opcion:string, grupo:number, subgrupo:number): void {    
    this._titulo = opcion;

    this._elementInicio = false;
    this._elementAmbientes = false;
    this._elementCocina = false;
    this._elementInteriores = false;
    this._elementExteriores = false;
    this._elementEscaleras = false;
    this._elementBanios = false;
    this._elementHabitacion = false;    
    this._elementServicios = false;
    this._elementElectricos = false;
    this._elementPintura = false;
    this._elementPlomeria = false;
    this._textoServicio = true;

    if(opcion == "0" || opcion == undefined){
      this._titulo = "Atrévete a soñar, nosotros te ayudamos a construir tus sueños.";
      this._textoServicio = false;
      this._elementInicio = true;
    } else if(grupo == 1) {
      console.log("grupo 1");      
      console.log("subgrupo: " + subgrupo);      
      switch("" + subgrupo){
        case "1": 
          this._elementCocina = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "2":      
          this._elementInteriores = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "3":
          this._elementExteriores = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "4":
          this._elementEscaleras = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "5":
          this._elementBanios = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "6":
          this._elementHabitacion = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        default:
          console.log("default");          
          this._elementAmbientes = true;
          this._servicios = this.obtenerServicioGrupo(grupo);
          break;
      }
    } else if(grupo == 2){
      console.log("grupo 2");      
      console.log("subgrupo: " + subgrupo);
      switch("" + subgrupo){
        case "1":
          this._elementPlomeria = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "2":
          this._elementElectricos = true;
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        case "3":      
          this._elementPintura = true;    
          this._servicios = this.obtenerServicioSubGrupo(grupo, subgrupo);
          break;
        default:
          this._elementServicios = true;   
          this._servicios = this.obtenerServicioGrupo(grupo);
          break;
      }
    }

    console.log(opcion);      
    this._imagen1 = "\assets\LogoAcabadosyReformas.jpeg";
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
