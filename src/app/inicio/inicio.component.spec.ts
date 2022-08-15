import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { InicioComponent } from './inicio.component';
import { By } from '@angular/platform-browser';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        InicioComponent 
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dado la carga de la pantalla al inciar los componentes entonces se debe mostrar el nombre de la opcion', () => {
    let titulo = fixture.debugElement.query(By.css('.texto')).nativeElement;
    console.log(titulo.innerHTML);
    
    expect(titulo.innerHTML).not.toBe('');
  });
});
