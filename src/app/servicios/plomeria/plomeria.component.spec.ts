import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlomeriaComponent } from './plomeria.component';

describe('PlomeriaComponent', () => {
  let component: PlomeriaComponent;
  let fixture: ComponentFixture<PlomeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlomeriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlomeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
