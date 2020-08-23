import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAberturaCaixaComponent } from './modal-abertura-caixa.component';

describe('ModalAberturaCaixaComponent', () => {
  let component: ModalAberturaCaixaComponent;
  let fixture: ComponentFixture<ModalAberturaCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAberturaCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAberturaCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
