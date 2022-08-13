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
});
