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
    path: 'regis-auto',
    loadChildren: () => import('./regis-auto/regis-auto.module').then( m => m.RegisAutoPageModule)
  },
  {
    path: 'regis-esta',
    loadChildren: () => import('./regis-esta/regis-esta.module').then( m => m.RegisEstaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
