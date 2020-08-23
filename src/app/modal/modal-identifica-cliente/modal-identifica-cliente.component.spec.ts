import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIdentificaClienteComponent } from './modal-identifica-cliente.component';

describe('ModalIdentificaClienteComponent', () => {
  let component: ModalIdentificaClienteComponent;
  let fixture: ComponentFixture<ModalIdentificaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIdentificaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIdentificaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
