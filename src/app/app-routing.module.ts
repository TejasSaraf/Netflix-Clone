import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
