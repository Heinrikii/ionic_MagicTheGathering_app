import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsDetailsPage } from './cards-details.page';

const routes: Routes = [
  {
    path: '',
    component: CardsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsDetailsPageRoutingModule {}
