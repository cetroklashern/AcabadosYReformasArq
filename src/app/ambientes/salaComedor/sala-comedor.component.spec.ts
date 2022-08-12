import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaComedorComponent } from './sala-comedor.component';

describe('SalaComedorComponent', () => {
  let component: SalaComedorComponent;
  let fixture: ComponentFixture<SalaComedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaComedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaComedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
