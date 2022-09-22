import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class OfertaComponentForm  { //Classe do MODELO do formulário
  private formBuilder: FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  getForm(): FormGroup { //Função que retorna o formulário
    return this.form;
  }

  private createForm(): FormGroup { //Cria definitivamente o formulário com as palavras-chave p/ o HTML
    const form =  this.formBuilder.group ({
      oferta: ['', [Validators.required]],
      alimento: ['',[Validators.required]],
      tipo: ['',[Validators.required]],
      quantidade: ['',[Validators.required]],
      data: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      obs: ['']
    });
    return form;
  }

}
