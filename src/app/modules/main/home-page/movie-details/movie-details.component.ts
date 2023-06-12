import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

 ;

  movieId: any;
  movieDetails = {}

  constructor( private route: ActivatedRoute, private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    this.getMovieById();
  }

  getMovieById() {
    this.restApiService.getMovieById(this.movieId)
    .subscribe(
      (res: any) => {
        console.log(res, "!!!!!!!!!!!!");
        this.movieDetails = res;
      }
    )
  }
  
}
