import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaniosComponent } from './banios.component';

describe('BaniosComponent', () => {
  let component: BaniosComponent;
  let fixture: ComponentFixture<BaniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
