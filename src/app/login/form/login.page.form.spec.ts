import { LoginPageForm } from './login.page.form';
import { FormBuilder, FormGroup } from '@angular/forms';


describe('LoginPageForm', () => {

  let loginPageForm: LoginPageForm;
  let form: FormGroup;

  beforeEach(() => {
    loginPageForm = new LoginPageForm(new FormBuilder());
    form = loginPageForm.createForm();
  });


  it ( 'should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('login')).not.toBeNull();
    expect(form.get('login').value).toEqual('');
    expect(form.get('login').valid).toBeFalsy();
    expect(form.get('senha')).not.toBeNull();
    expect(form.get('senha').value).toEqual('');
    expect(form.get('senha').valid).toBeFalsy();

  });

  it('should have email invalid if email is not valid', () => {
    form.get('login').setValue('Email inválido');

    expect(form.get('login').valid).toBeFalsy();
  });

  it('should have email valid if email is valid', () => {
    form.get('login').setValue('valid@email.com');

    expect(form.get('login').valid).toBeTruthy();
  });

  it('should have a valid form', () => {
    form.get('login').setValue('valid@email.com');
    form.get('senha').setValue('qualquerPassword');

    expect(form.valid).toBeTruthy();
  });
});
