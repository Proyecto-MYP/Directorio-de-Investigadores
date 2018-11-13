import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEstadoComponent } from './detalle-estado.component';

describe('DetalleEstadoComponent', () => {
  let component: DetalleEstadoComponent;
  let fixture: ComponentFixture<DetalleEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
