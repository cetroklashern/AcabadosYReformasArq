import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  _titulo:string;

  constructor() { 
    /* TODO document why this constructor is empty */  
    this._titulo = "";
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
