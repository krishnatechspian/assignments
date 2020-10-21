import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product/main2',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../app/pages/products/products.module').then(m => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
