import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { SkillsModule } from './components/skills/skills.module';
import { ProjectsModule } from './components/projects/projects.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./components/projects/projects.module').then(
        (m) => ProjectsModule
      ),
  },
  { path: 'cv', component: CvComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'references', component: ReferenceComponent },
  {
    path: 'skills',
    loadChildren: () =>
      import('./components/skills/skills.module').then((m) => SkillsModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
