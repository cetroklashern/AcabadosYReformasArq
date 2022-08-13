import { TestBed } from '@angular/core/testing';
import { Imagen } from 'src/app/entidades/imagen';

import { ImagenesServiceService } from './imagenes-service.service';

describe('ImagenesServiceService', () => {
  let service: ImagenesServiceService;
  let fakeService: jasmine.Spy<(categoria: number, grupo: number) => Imagen[]>;
  let _listaImagenes: Array<Imagen>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesServiceService);

    _listaImagenes = new Array<Imagen>();

    let imagen = new Imagen();
    imagen.id = 1;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina integral 1";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 1";

    _listaImagenes.push(imagen);

    imagen = new Imagen();
    imagen.id = 2;
    imagen.archivo = "fotoCocina1.jpeg";
    imagen.descripcion = "Cocina integral 2";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 2";

    _listaImagenes.push(imagen);    

    imagen = new Imagen();
    imagen.id = 3;
    imagen.archivo = "fotoCocina3.jpeg";
    imagen.descripcion = "Cocina integral 3";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 1;
    imagen.nombreSubGrupo = "Cocinas";
    imagen.nombre = "Cocina 3";

    _listaImagenes.push(imagen);    

    imagen = new Imagen();
    imagen.id = 4;
    imagen.archivo = "fotoBanio1.jpeg";
    imagen.descripcion = "Baño 1";
    imagen.grupo = 1;
    imagen.nombreGrupo = "Ambientes";
    imagen.subGrupo = 2;
    imagen.nombreSubGrupo = "Baños";
    imagen.nombre = "Baño 1";

    _listaImagenes.push(imagen);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dado la solicitud de el grupo 1 para cuando se consultan las imagenes entonces carga lista de imagenes del grupo 1', () => {
    let categoria = 1;
    let grupo = 1;
    let resultado:Array<Imagen> = [];        

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenes(categoria, grupo);

    expect(resultado.length).toBeGreaterThan(0);

    resultado.forEach(imagen => {
      expect(imagen.grupo).toEqual(1);
      expect(imagen.subGrupo).toEqual(1);
    });
  });
});
