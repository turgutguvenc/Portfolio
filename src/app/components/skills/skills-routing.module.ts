import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { MachineLearningComponent } from './skill-details/machine-learning/machine-learning.component';
import { ComputervisionComponent } from './skill-details/computervision/computervision.component';
import { DatascienceComponent } from './skill-details/datascience/datascience.component';
import { DeeplearningComponent } from './skill-details/deeplearning/deeplearning.component';
import { FrontendComponent } from './skill-details/frontend/frontend.component';
import { SoftwareComponent } from './skill-details/software/software.component';
const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    children: [
      { path: 'machinelearning', component: MachineLearningComponent },
      { path: 'computervision', component: ComputervisionComponent },
      { path: 'datascience', component: DatascienceComponent },
      { path: 'deeplearning', component: DeeplearningComponent },
      { path: 'frontenddevelopment', component: FrontendComponent },
      { path: 'softwaredevelopment', component: SoftwareComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
