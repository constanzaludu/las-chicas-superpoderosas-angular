import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPersonajesComponent } from './otros-personajes.component';

describe('OtrosPersonajesComponent', () => {
  let component: OtrosPersonajesComponent;
  let fixture: ComponentFixture<OtrosPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosPersonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
