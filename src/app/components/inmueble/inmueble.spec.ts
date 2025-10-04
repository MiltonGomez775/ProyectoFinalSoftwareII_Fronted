import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inmueble } from './inmueble';

describe('Inmueble', () => {
  let component: Inmueble;
  let fixture: ComponentFixture<Inmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inmueble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inmueble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
