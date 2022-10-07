import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MinhasOfertasPage } from './minhas-ofertas/minhas-ofertas.page';
import { PerfilPage } from './perfil/perfil.page';
import { OfertarPage } from './ofertar/ofertar.page';
import { TabsModule } from './components/tabs/tabs.module';
import { ClickAlertModule } from './components/click-alert/click-alert.module';
import { ConfigPage } from './config/config.page';

@NgModule({
  declarations: [
    AppComponent,
    PerfilPage,
    MinhasOfertasPage,
    OfertarPage,
    ConfigPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsModule,
    ClickAlertModule,
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

