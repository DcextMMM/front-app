import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CadastroPageForm {
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
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      senha:['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required]],

      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complement:['', [Validators.required]],
      cep: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
    });

    return form;
  }
}
