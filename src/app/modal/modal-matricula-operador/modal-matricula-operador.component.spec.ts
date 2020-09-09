import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMatriculaOperadorComponent } from './modal-matricula-operador.component';

describe('ModalMatriculaOperadorComponent', () => {
  let component: ModalMatriculaOperadorComponent;
  let fixture: ComponentFixture<ModalMatriculaOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMatriculaOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMatriculaOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
