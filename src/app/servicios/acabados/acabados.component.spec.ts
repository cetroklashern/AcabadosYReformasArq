import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcabadosComponent } from './acabados.component';

describe('AcabadosComponent', () => {
  let component: AcabadosComponent;
  let fixture: ComponentFixture<AcabadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcabadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcabadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
