import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormaPagamentoComponent } from './modal-forma-pagamento.component';

describe('ModalFormaPagamentoComponent', () => {
  let component: ModalFormaPagamentoComponent;
  let fixture: ComponentFixture<ModalFormaPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormaPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
