import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricosComponent } from './electricos.component';

describe('ElectricosComponent', () => {
  let component: ElectricosComponent;
  let fixture: ComponentFixture<ElectricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
