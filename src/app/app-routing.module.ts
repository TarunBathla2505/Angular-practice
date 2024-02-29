import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'getCources', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
