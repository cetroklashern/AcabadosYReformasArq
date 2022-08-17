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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dado la solicitud de el grupo 1 para cuando se consultan las imagenes entonces carga lista de imagenes del grupo 1', () => {
    let categoria = 1;
    let grupo = 1;
    let pagina = 0;
    let resultado:Array<Imagen> = [];        

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenes(categoria, grupo, pagina);

    expect(resultado.length).toBeGreaterThan(0);

    resultado.forEach(imagen => {
      expect(imagen.grupo).toEqual(1);
      expect(imagen.subGrupo).toEqual(1);
    });
  });

  it('dado la solicitud de el grupo 1 para cuando se consultan las imagenes entonces carga lista de maximo 9 imagenes', () => {
    let categoria = 1;
    let grupo = 1;
    let pagina = 0;
    let resultado:Array<Imagen> = [];        

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenes(categoria, grupo, pagina);
    
    expect(resultado.length).toBeLessThan(7);    
  });

  it('dado la solicitud de el grupo 3 para cuando se consultan las imagenes entonces carga lista de minimo 9 imagenes', () => {
    let categoria = 1;
    let grupo = 3;
    let pagina = 0;
    let resultado:Array<Imagen> = [];        

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenes(categoria, grupo, pagina);
    
    expect(resultado.length).toBe(6);    
  });

  it('dado la solicitud de el grupo 1 para cuando se consultan las imagenes entonces carga lista ordenada por fecha', () => {
    let categoria = 1;
    let grupo = 1;
    let pagina = 0;
    let resultado:Array<Imagen> = [];        

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenes(categoria, grupo, pagina);
    
    expect(resultado[0].fecha > resultado[1].fecha).toBeTrue();  
  });

  it('dado la petición de imagenes cuando se cambia de pagina entonces carga la lista de imagenes de la nueva pagina',  () => {
    let categoria = 1;
    let grupo = 1;
    let pagina = 0;
    let resultado1:Array<Imagen> = [];
    let resultado2:Array<Imagen> = [];   

    service.listaImagenes = _listaImagenes;

    resultado1 = service.obtenerImagenes(categoria, grupo, 0);
    resultado2 = service.obtenerImagenes(categoria, grupo, 1);

    expect(resultado1[0].id != resultado2[0].id).toBeTrue()
  });

  it('dado la solicitud de imagenes cuando se consulta la imagen por defecto entonces carga en la lista la imagen por defecto', () => {
    let resultado:Imagen;        

    resultado = service.obtenerImagenPorDefecto();
    
    expect(resultado.grupo).toEqual(0);
    expect(resultado.subGrupo).toEqual(0);    
  });

  it('dada la solicitud de imagenes cuando se consulta por imagenes aleatorias entonces retorna una lista con maximo 9 imagenes', () => {
    let resultado:Array<Imagen> = [];        

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenesAleatorias();
    
    expect(resultado.length).toBeLessThan(7);    
  });

  it('dada la solicitud de imagenes cuando se consulta por imagenes aleatorias entonces retorna una lista con maximo 2 imagenes de cada grupo', () => {
    let resultado:Array<Imagen> = [];  
    let repeticiones = 0;
    let grupoActual = 0;
    let subGrupoActual = 0;
    let maxRepeticiones = 0;  

    service.listaImagenes = _listaImagenes;

    resultado = service.obtenerImagenesAleatorias();        

    //se organiza la lista en grupos y subgrupos
    resultado.sort((a, b) => {
      if (a.grupo < b.grupo)
        return -1;
      else if (a.grupo > b.grupo)
        return 1;
      else 
        if(a.subGrupo < b.subGrupo)
          return -1;
        else if (a.subGrupo > b.subGrupo)
          return 1;
        else 
          return 0;
    });
    
    //se valida las veces que se repiten los subgrupos
    resultado.forEach(imagen => {
      if(imagen.grupo == 0 && imagen.subGrupo == 0){
        // Se ignoran las imagenes por defecto
      } else if(imagen.grupo == grupoActual && imagen.subGrupo == subGrupoActual){
        repeticiones++;
      } else {
        if(repeticiones > maxRepeticiones){
          maxRepeticiones = repeticiones;
        }
        repeticiones = 0;
        grupoActual = imagen.grupo;
        subGrupoActual = imagen.subGrupo;
      }
    });  

    //Assert
    expect(maxRepeticiones).toBeLessThan(3);
  });
});
