import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowProductComponent,
    DeleteProductComponent,
    FormComponent,
    AboutUsComponent,
    CourseDetailsComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
