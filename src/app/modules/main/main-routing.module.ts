import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsComponent } from './home-page/movie-details/movie-details.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "details/:movieId", component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
