//Form init, Validations Programaticaly Form Value Change, objects

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class LoginPageForm {

  private formBuilder: FormBuilder;
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
        login: ['', [Validators.required, Validators.email]], //valor inicial da propriedade
        senha: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

}
