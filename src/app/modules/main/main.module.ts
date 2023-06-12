import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieDetailsComponent } from './home-page/movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CardModule,
    ButtonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
