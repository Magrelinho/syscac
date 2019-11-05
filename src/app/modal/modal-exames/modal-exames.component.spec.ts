import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamesComponent } from './modal-exames.component';

describe('ModalExamesComponent', () => {
  let component: ModalExamesComponent;
  let fixture: ComponentFixture<ModalExamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
