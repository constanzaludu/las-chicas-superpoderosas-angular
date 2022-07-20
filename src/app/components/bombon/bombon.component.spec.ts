import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombonComponent } from './bombon.component';

describe('BombonComponent', () => {
  let component: BombonComponent;
  let fixture: ComponentFixture<BombonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BombonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
