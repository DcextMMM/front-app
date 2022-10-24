import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CriarOfertaPageForm {
  public data: [];
  private formBuilder: FormBuilder;
  private form: FormGroup;


  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  getForm(): FormGroup {
    return this.form;
  }


  private createForm(): FormGroup {
    const form = this.formBuilder.group ({
      nome: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      obs: ['', [Validators.required]],
      data_colheita: ['', [Validators.required]]
    });

    return form;
  }
}
