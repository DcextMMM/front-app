import { CriarOfertaPageForm } from './criar-oferta.page.form';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('CriarOfertaPageForm', () => {
  let criarOfertaPageForm: CriarOfertaPageForm;
  let form: FormGroup;

  beforeEach(() => {
    criarOfertaPageForm = new CriarOfertaPageForm(new FormBuilder());
    form = criarOfertaPageForm.getForm();
  });

  it('should empty name be invalid', () => {
    expect(form.get('nome').valid).toBeFalsy();
  });

  it('should empty product be invalid', () => {
    expect(form.get('product').valid).toBeFalsy();
  });

  it('should empty product be invalid', () => {
    expect(form.get('quantidade').valid).toBeFalsy();
  });
  it ('the form should be valid', () => {
    form.get('nome').setValue('anyNome');
    form.get('obs').setValue('anyObs');
    form.get('product').setValue('anyObs');
    form.get('quantidade').setValue('qualquerQuantidade');
    expect(form.valid).toBeTruthy();
  });
});
