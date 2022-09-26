import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponent ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should go to perfil on perfil', () => {
    spyOn(router, 'navigate');

    component.perfil();
    expect(router.navigate).toHaveBeenCalledWith(['perfil']);
  });

  it('should go to minhas-ofertas on minhas ofertas', () => {
    spyOn(router, 'navigate');

    component.minhasOfertas();
    expect(router.navigate).toHaveBeenCalledWith(['minhas-ofertas']);
  });
  it('should go to ofertar on ofertar', () => {
    spyOn(router, 'navigate');

    component.ofertar();
    expect(router.navigate).toHaveBeenCalledWith(['ofertar']);
  });
});
