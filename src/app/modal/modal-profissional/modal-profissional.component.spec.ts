import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfissionalComponent } from './modal-profissional.component';

describe('ModalProfissionalComponent', () => {
  let component: ModalProfissionalComponent;
  let fixture: ComponentFixture<ModalProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
