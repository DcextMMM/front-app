import { ModalOfertarBtnModule } from './../../modal-ofertar-btn/modal-ofertar-btn.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalOfertarBtnComponent } from './modal-ofertar-btn.component';

describe('ModalOfertarBtnComponent', () => {
  let component: ModalOfertarBtnComponent;
  let fixture: ComponentFixture <ModalOfertarBtnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOfertarBtnComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, ModalOfertarBtnModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOfertarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create oferta form on page init', () => {
    fixture.detectChanges();

    expect(component.ofertaForm).not.toBeUndefined();
  });
});
