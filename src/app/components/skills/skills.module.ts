import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { MachineLearningComponent } from './skill-details/machine-learning/machine-learning.component';
import { DatascienceComponent } from './skill-details/datascience/datascience.component';
import { FrontendComponent } from './skill-details/frontend/frontend.component';
import { DeeplearningComponent } from './skill-details/deeplearning/deeplearning.component';
import { ComputervisionComponent } from './skill-details/computervision/computervision.component';
import { SoftwareComponent } from './skill-details/software/software.component';
import { DynamicTooltipDirective } from './dynamic-tooltip.directive';

@NgModule({
  declarations: [SkillsComponent, MachineLearningComponent, DatascienceComponent, FrontendComponent, DeeplearningComponent, ComputervisionComponent, SoftwareComponent, DynamicTooltipDirective],
  imports: [CommonModule, MaterialModule, SkillsRoutingModule],
})
export class SkillsModule {}
