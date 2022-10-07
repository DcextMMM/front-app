import { Router } from '@angular/router';
import { CriarOfertaPageForm } from './form/criar-oferta.page.form';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CriarOfertaPageModule } from './criar-oferta.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarOfertaPage } from './criar-oferta.page';

describe('CriarOfertaPage', () => {
  let component: CriarOfertaPage;
  let fixture: ComponentFixture<CriarOfertaPage>;
  let router: Router;
  let page;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarOfertaPage ],
      imports: [IonicModule.forRoot(),
        ReactiveFormsModule,
        CriarOfertaPageModule,
        AppRoutingModule,
        CriarOfertaPageForm
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = fixture.debugElement.nativeElement;
  }));

  it('should create criar-oferta form on page init', () => {
    fixture.detectChanges();
    expect(component.criarForm).not.toBeUndefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to minhas-ofertas on register', () => {
    fixture.detectChanges();
    spyOn(router, 'navigate');
    component.criarForm.getForm().get('nome').setValue('anyNome');
    component.criarForm.getForm().get('quantidade').setValue('anyQuantidade');
    component.criarForm.getForm().get('obs').setValue('anyObs');

    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(['minhas-ofertas']);
  });

  it('should not be allowed to criar-oferta with form invalid', () =>{
    fixture.detectChanges();
    spyOn(router, 'navigate');
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledTimes(0);
  });
});
