import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  _titulo:string;  
  //public destroyed = new Subject<any>();

  prueba = "Inicio";
  grupoSeleccionado = 0;
  subGrupoSeleccionado = 0;

  constructor(private rutaActiva: ActivatedRoute, private router: Router) { 
    /* TODO document why this constructor is empty */  
    this._titulo = this.rutaActiva.snapshot.params['opcion'];
  }

  ngOnInit(): void {    
    console.log(this.rutaActiva.snapshot.params['opcion']);
    
    this._titulo = this.rutaActiva.snapshot.params['opcion'];
    this.grupoSeleccionado = this.rutaActiva.snapshot.params[1];
    this.subGrupoSeleccionado = this.rutaActiva.snapshot.params[2];   
    
    /*this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.fetchData();
    });*/
  }

  ngOnDestroy(): void {
    /*this.destroyed.next();
    this.destroyed.complete();*/
  }
}
