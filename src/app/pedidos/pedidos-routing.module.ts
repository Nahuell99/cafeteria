import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './pages/tabla/tabla.component';

const routes: Routes = [
  {
    path: '',
    component: TablaComponent,
    children: [
      {
        path: 'tabla',
        component: TablaComponent
      },
      {
        path: '**',
        redirectTo: 'tabla'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
