import { TabsModule } from './components/tabs/tabs.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ofertar',
    loadChildren: () => import('./ofertar/ofertar.module').then( m => m.OfertarPageModule)
  },
  {
    path: 'minhas-ofertas',
    loadChildren: () => import('./minhas-ofertas/minhas-ofertas.module').then( m => m.MinhasOfertasPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },
  {
    path: 'meus-pedidos',
    loadChildren: () => import('./meus-pedidos/meus-pedidos.module').then( m => m.MeusPedidosPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then( m => m.TabsModule)
  },
  {
    path: 'criar-oferta',
    loadChildren: () => import('./criar-oferta/criar-oferta.module').then( m => m.CriarOfertaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
