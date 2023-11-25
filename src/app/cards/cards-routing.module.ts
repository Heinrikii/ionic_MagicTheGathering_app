import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cards-list/cards-list.module').then(m => m.CardsListPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./cards-details/cards-details.module').then(m => m.CardsDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
