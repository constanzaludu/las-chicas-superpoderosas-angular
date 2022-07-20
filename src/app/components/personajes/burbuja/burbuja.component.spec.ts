import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbujaComponent } from './burbuja.component';

describe('BurbujaComponent', () => {
  let component: BurbujaComponent;
  let fixture: ComponentFixture<BurbujaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurbujaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurbujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
