import { CadastroPageModule } from './cadastro.module';
import { AppRoutingModule } from './../app-routing.module';
import { CadastroPageForm } from './form/cadastro.page.form';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { CadastroPage } from './cadastro.page';

describe('CadastroPage', () => {
  let component: CadastroPage;
  let fixture: ComponentFixture<CadastroPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPage ],
      imports: [IonicModule.forRoot(),
        ReactiveFormsModule,
        CadastroPageForm,
        AppRoutingModule,
        CadastroPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create register form on page init', () => {
    fixture.detectChanges();
    expect(component.registerForm).not.toBeUndefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to perfil on register', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['perfil']);
  });
});
