import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInmuebles } from './listar-inmuebles';

describe('ListarInmuebles', () => {
  let component: ListarInmuebles;
  let fixture: ComponentFixture<ListarInmuebles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarInmuebles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInmuebles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
