import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroPageForm } from './cadastro.page.form';

describe('CadastroPageForm', () => {
  let registerPageForm: CadastroPageForm;
  let form: FormGroup;

  beforeEach(() => {
    registerPageForm = new CadastroPageForm(new FormBuilder());
    form = registerPageForm.getForm();
  });

  it('should empty name be invalid', () => {
    expect(form.get('nome').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('sobrenome').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('password').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('cpf').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('phone').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('endereco').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('numero').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('complement').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('cep').valid).toBeFalsy();
  });

  it('should empty name be invalid', () => {
    expect(form.get('estado').valid).toBeFalsy();
  });
  it('should empty name be invalid', () => {
    expect(form.get('cidade').valid).toBeFalsy();
  });
  it('should invalid email be invalid', () => {
    form.get('email').setValue('invalidEmail');
    expect(form.get('email').valid).toBeFalsy();
  });

  it('should password less than 7 characters be invalid', () => {
    form.get('password').setValue('12345');
    expect(form.get('password').valid).toBeFalsy();
  });

  it ('the form should be valid', () => {
    form.get('nome').setValue('anyname');
    form.get('sobrenome').setValue('anysobrenome');
    form.get('email').setValue('anyemail');
    form.get('password').setValue('anypassword');
    form.get('phone').setValue('anyphone');
    form.get('cpf').setValue('anycpf');
    form.get('endereco').setValue('qualquer endereco');
    form.get('complement').setValue('qualquer complemento');
    form.get('numero').setValue('qualquer numero');
    form.get('cep').setValue('qualquer cep');
    form.get('estado').setValue('qualquer estado');
    form.get('cidade').setValue('qualquer cidade');

    expect(form.valid).toBeTruthy();
  });
});
