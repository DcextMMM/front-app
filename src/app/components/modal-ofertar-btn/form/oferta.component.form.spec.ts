import { FormBuilder, FormGroup } from '@angular/forms';
import { OfertaComponentForm } from './oferta.component.form';




describe('OfertaPageForm', () => {
  let ofertaPageForm: OfertaComponentForm;
  let form: FormGroup;

  beforeEach(() => {
    ofertaPageForm = new OfertaComponentForm(new FormBuilder());
    form = ofertaPageForm.getForm();
  });

  it('should "alimento" empty be invalid', () => {
    expect(form.get('alimento').valid).toBeFalsy();
  });
  it('should "quantidade" empty be invalid', () => {
    expect(form.get('quantidade').valid).toBeFalsy();
  });
  it('should "data" empty be invalid', () => {
    expect(form.get('data').valid).toBeFalsy();
  });
  it('should "price" empty be invalid', () => {
    expect(form.get('preco').valid).toBeFalsy();
  });
  it('should "tipo" empty be invalid', () => {
    expect(form.get('tipo').valid).toBeFalsy();
  });


  it('should the form be valid', () => {
    form.get('oferta').setValue('anyOferta');
    form.get('tipo').setValue('anyTipo');
    form.get('data').setValue('00/00/00');
    form.get('preco').setValue('R$000,000');
    form.get('alimento').setValue('anyAlimento');
    form.get('quantidade').setValue('anyQuantidade');

    expect(form.valid).toBeTruthy();
  });

});
