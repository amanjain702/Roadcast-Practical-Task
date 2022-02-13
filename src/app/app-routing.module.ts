import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentdataComponent } from './recruitmentdata/recruitmentdata.component';

const routes: Routes = [

  {path:'getData',component:RecruitmentdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
