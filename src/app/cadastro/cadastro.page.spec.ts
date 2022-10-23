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
  let page;

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
    page = fixture.debugElement.nativeElement;
  }));

  it('should create register form on page init', () => {
    fixture.detectChanges();
    expect(component.registerForm).not.toBeUndefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to perfil on register', () => {
    fixture.detectChanges();
    spyOn(router, 'navigate');
    component.registerForm.getForm().get('nome').setValue('anyname');
    component.registerForm.getForm().get('sobrenome').setValue('anysobrenome');
    component.registerForm.getForm().get('email').setValue('anyemail');
    component.registerForm.getForm().get('senha').setValue('anypassword');
    component.registerForm.getForm().get('telefone').setValue('anyphone');
    component.registerForm.getForm().get('cpf').setValue('anycpf');
    component.registerForm.getForm().get('rua').setValue('qualquer endereco');
    component.registerForm.getForm().get('complement').setValue('qualquer complemento');
    component.registerForm.getForm().get('numero').setValue('qualquer numero');
    component.registerForm.getForm().get('cep').setValue('qualquer cep');
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(['perfil']);
  });

  it('should not be allowed to register with form invalid', () =>{
    fixture.detectChanges();
    spyOn(router, 'navigate');
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledTimes(0);
  });
});
