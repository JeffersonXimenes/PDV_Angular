import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSaidaOperadorComponent } from './modal-saida-operador.component';

describe('ModalSaidaOperadorComponent', () => {
  let component: ModalSaidaOperadorComponent;
  let fixture: ComponentFixture<ModalSaidaOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSaidaOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSaidaOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
