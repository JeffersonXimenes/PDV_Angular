import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFechamentoCaixaComponent } from './modal-fechamento-caixa.component';

describe('ModalFechamentoCaixaComponent', () => {
  let component: ModalFechamentoCaixaComponent;
  let fixture: ComponentFixture<ModalFechamentoCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFechamentoCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFechamentoCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
