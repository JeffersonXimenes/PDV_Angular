import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecargaComponent } from './modal-recarga.component';

describe('ModalRecargaComponent', () => {
  let component: ModalRecargaComponent;
  let fixture: ComponentFixture<ModalRecargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
