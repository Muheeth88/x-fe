import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor( private restApiService: RestApiService) {}

  movieList: [] = [];

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.restApiService.getAllMovies()
    .subscribe({
      next: ((res: any) => {
        console.log(res, "!!!");
        this.movieList = res;
      }),
      error: ((err) => {
        console.log(err.message);
      })
    })
  }

  handleClick(movie: any) {
    console.log(movie?.movieId);
  }
}
