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

  it('should empty name be invalid', () => {
    expect(form.get('quantidade').valid).toBeFalsy();
  });
  it('should empty name be invalid', () => {
    expect(form.get('obs').valid).toBeFalsy();
  });

  it ('the form should be valid', () => {
    form.get('nome').setValue('anyNome');
    form.get('quantidade').setValue('anyQuantidade');
    form.get('obs').setValue('anyObs');
    expect(form.valid).toBeTruthy();
  });
});
