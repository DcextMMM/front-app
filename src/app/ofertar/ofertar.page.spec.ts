import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertarPage } from './ofertar.page';

describe('OfertarPage', () => {
  let component: OfertarPage;
  let fixture: ComponentFixture<OfertarPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertarPage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to criar-oferta on criar oferta', () => {
    spyOn(router, 'navigate');

    component.criarOferta();
    expect(router.navigate).toHaveBeenCalledWith(['criar-oferta']);
  });
});
