import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInmuebleCliente } from './listar-inmueble-cliente';

describe('ListarInmuebleCliente', () => {
  let component: ListarInmuebleCliente;
  let fixture: ComponentFixture<ListarInmuebleCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarInmuebleCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInmuebleCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
