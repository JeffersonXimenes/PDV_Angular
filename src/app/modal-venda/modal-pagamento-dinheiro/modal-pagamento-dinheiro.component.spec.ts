import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPagamentoDinheiroComponent } from './modal-pagamento-dinheiro.component';

describe('ModalPagamentoDinheiroComponent', () => {
  let component: ModalPagamentoDinheiroComponent;
  let fixture: ComponentFixture<ModalPagamentoDinheiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPagamentoDinheiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPagamentoDinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
