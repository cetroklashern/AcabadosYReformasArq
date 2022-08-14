import { TestBed } from '@angular/core/testing';

import { SubGrupoServiceService } from './sub-grupo-service.service';

describe('SubGrupoServiceService', () => {
  let service: SubGrupoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGrupoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dada una solicitud de consulta cuando se inicia el servicio entonces se obtiene la lista de subgrupos', () => {
    let resultado = service.listaSubGrupos;
    expect(resultado.length).toBeGreaterThan(0);
  });
});
