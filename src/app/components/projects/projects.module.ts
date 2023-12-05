import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendProjectsComponent } from './project-details/frontend-projects/frontend-projects.component';
import { DatascienceProjectsComponent } from './project-details/datascience-projects/datascience-projects.component';
import { ComputerVisionProjectsComponent } from './project-details/computer-vision-projects/computer-vision-projects.component';
import { SoftwareDevelopmentProjectsComponent } from './project-details/software-development-projects/software-development-projects.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { MachinelearningProjectsComponent } from './project-details/machinelearning-projects/machinelearning-projects.component';

@NgModule({
  declarations: [
    FrontendProjectsComponent,
    DatascienceProjectsComponent,
    ComputerVisionProjectsComponent,
    SoftwareDevelopmentProjectsComponent,
    ProjectsComponent,
    MachinelearningProjectsComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, MaterialModule],
})
export class ProjectsModule {}
