import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ComputerVisionProjectsComponent } from './project-details/computer-vision-projects/computer-vision-projects.component';
import { DatascienceProjectsComponent } from './project-details/datascience-projects/datascience-projects.component';
import { FrontendProjectsComponent } from './project-details/frontend-projects/frontend-projects.component';
import { SoftwareDevelopmentProjectsComponent } from './project-details/software-development-projects/software-development-projects.component';
import { MachinelearningProjectsComponent } from './project-details/machinelearning-projects/machinelearning-projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'machinelearning-projects',
        component: MachinelearningProjectsComponent,
      },
      {
        path: 'computervision-projects',
        component: ComputerVisionProjectsComponent,
      },
      { path: 'datascience-projects', component: DatascienceProjectsComponent },
      { path: 'frontend-projects', component: FrontendProjectsComponent },
      {
        path: 'software-projects',
        component: SoftwareDevelopmentProjectsComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
