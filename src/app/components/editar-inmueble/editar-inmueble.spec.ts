import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInmueble } from './editar-inmueble';

describe('EditarInmueble', () => {
  let component: EditarInmueble;
  let fixture: ComponentFixture<EditarInmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarInmueble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInmueble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
