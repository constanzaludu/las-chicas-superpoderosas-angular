import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellotaComponent } from './bellota.component';

describe('BellotaComponent', () => {
  let component: BellotaComponent;
  let fixture: ComponentFixture<BellotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BellotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BellotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
