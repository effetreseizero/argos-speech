import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyEditPage } from './survey-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyEditPageRoutingModule {}
