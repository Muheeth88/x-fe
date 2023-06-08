import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor( private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.restApiService.getAllMovies()
    .subscribe({
      next: ((res) => {
        console.log(res, "!!!");
      }),
      error: ((err) => {
        console.log(err.message);
      })
    })
  }
}
