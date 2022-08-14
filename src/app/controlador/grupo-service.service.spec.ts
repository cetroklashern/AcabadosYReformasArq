import { TestBed } from '@angular/core/testing';

import { GrupoServiceService } from './grupo-service.service';

describe('GrupoServiceService', () => {
  let service: GrupoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dada una solicitud de consulta cuando se inicia el servicio entonces se obtiene la lista de grupos', () => {
    let resultado = service.listaGrupos;
    expect(resultado.length).toBeGreaterThan(0);
  });
});
