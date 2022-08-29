import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './pedidos/pages/tabla/tabla.component';

const routes: Routes = [
  {
    path: '404',
    component: TablaComponent
  },
  {
    path: '**',
    component: TablaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
