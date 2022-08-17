import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ImagenesServiceService } from '../controlador/imagenes-service.service';
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
  _elementBanio:boolean;
  _elementComedor:boolean;
  _elementHabitacion:boolean;
  _elementServicios:boolean;
  _elementElectricos:boolean;
  _elementPintura:boolean;
  _elementPlomeria:boolean;
  _textoServicio:boolean;

  prueba = "Inicio";
  grupoSeleccionado = 0;
  subGrupoSeleccionado = 0;
  servicioImagenes: ImagenesServiceService;

  constructor(private rutaActiva: ActivatedRoute, private router: Router) { 
    /* TODO document why this constructor is empty */  
    this._elementInicio = false;
    this._elementAmbientes = false;
    this._elementCocina = false;
    this._elementBanio = false;
    this._elementComedor = false;
    this._elementHabitacion = false;    
    this._elementServicios = false;
    this._elementElectricos = false;
    this._elementPintura = false;
    this._elementPlomeria = false;
    this._textoServicio = false;    
    this._titulo = "";
    this._servicios = "";
    this._imagen1 = "";
    console.log("Constructor");
    this.servicioImagenes = new ImagenesServiceService();    
  }

  ngOnInit(): void {   
    this.grupoSeleccionado = this.rutaActiva.snapshot.params['grupo'];
    this.subGrupoSeleccionado = this.rutaActiva.snapshot.params['subgrupo'];  
    
    this.rutaActiva.params.subscribe(routeParams => {
      this.cargarDatos(routeParams['opcion'], routeParams['grupo'], routeParams['subgrupo']);
    });
  }

  cargarDatos(opcion:string, grupo:number, subgrupo:number) {
    this._titulo = opcion;

    this._elementInicio = false;
    this._elementAmbientes = false;
    this._elementCocina = false;
    this._elementBanio = false;
    this._elementComedor = false;
    this._elementHabitacion = false;    
    this._elementServicios = false;
    this._elementElectricos = false;
    this._elementPintura = false;
    this._elementPlomeria = false;
    this._textoServicio = true;

    if(opcion == "0"){
      this._titulo = "Atrévete a soñar, nosotros te ayudamos a construir tus sueños.";
      this._textoServicio = false;
      this._elementInicio = true;
    } else if(grupo == 1 && subgrupo == 0){
      this._servicios = "Ponemos en sus manos nuestra experienca para crear ambientes que se ajustes" + 
        " a sus sueños y necesidades."; 
      this._elementAmbientes = true;
    } else if(grupo == 1 && subgrupo == 1){
      this._servicios = "Fabricación e instalación de muebles de cocina, instalación de electrodomesticos," + 
        "adecuación de espacios, iluminación de cocina, cambio de pisos y enchapes, y más.";
      this._elementCocina = true;
    } else if(grupo == 1 && subgrupo == 2){
      this._servicios = "Fabricación e instalación de muebles de baño, fabricación de lavamanos," + 
        " en material de diseño exclusivo, instalación de duchas, bañeras, jacuzzi y más.";
      this._elementBanio = true;
    } else if(grupo == 1 && subgrupo == 3){
      this._servicios = "Creación de ambientes de sala y comedor unicos, con acabados que se ajusten a " +
        "sus gustos, construcción de chimeneas, muebles de entretenimiento, zona de bebidas, moderna iluminación y más.";
      this._elementComedor = true;
    } else if(grupo == 1 && subgrupo == 7){
      this._servicios = "Convertiremos tu habitación en tu sitio favorito, fabricación de muebles, vestier y closet " + 
        "a la medida, aprovechamiento máximo de los espacios.";
      this._elementHabitacion = true;
    } else if(grupo == 2 && subgrupo == 0){
      this._servicios = "Contamos con personal capacitado y con experiencia para solucionar cualquier emergencia, " + 
        "reparación y mantenimiento de tus espacios, instalaciones eléctricas, plomería y tuberias de gas.";
      this._elementServicios = true;
    } else if(grupo == 2 && subgrupo == 4){
      this._servicios = "Reparamos, modificamos y actualizamos tus instalaciones de agua, lavaplatos, lavamanos y " + 
        "lavaderos. Te asesoramos en cualquier solución o reparación que requieras realizar.";
      this._elementPlomeria = true;
    } else if(grupo == 2 && subgrupo == 5){
      this._servicios = "Reparamos, modificamos y actualizamos tus instalaciones eléctricas, cambiamos e instalamos " + 
        "dispositivos electricos y electrónicos. Te asesoramos en cualquier solución o reparación que requieras realizar.";
      this._elementElectricos = true;
    } else if(grupo == 2 && subgrupo == 6){
      this._servicios = "Te prestamos servicios de pintura de zonas, estuco, reparación de esquinas, cambio " + 
        "de texturas en paredes y techo.";        
      this._elementPintura = true;
    } 

    console.log(opcion);      
    this._imagen1 = "\assets\LogoAcabadosyReformas.jpeg";
  }  
}
