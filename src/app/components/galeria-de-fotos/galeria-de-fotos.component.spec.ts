import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDeFotosComponent } from './galeria-de-fotos.component';

describe('GaleriaDeFotosComponent', () => {
  let component: GaleriaDeFotosComponent;
  let fixture: ComponentFixture<GaleriaDeFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaDeFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaDeFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
