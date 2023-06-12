import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  faHeart = faHeart;
  faBookmark = faBookmark;

  jwtToken = localStorage.getItem("JwtToken")
  isUserLoggedIn: boolean = false;

  userDetailsString = localStorage.getItem("user")
  userObj: any = {};
  userId: number;

  userDetails: any = {};

  constructor( private restApiService: RestApiService) {}

  movieList: any = [];

  ngOnInit(): void {
    if(this.jwtToken) {
      this.isUserLoggedIn = true;
    }
    this.getAllMovies();
    this.getTheUser();
    console.log("User Details", this.userObj)
  }

  getTheUser() {
    if(this.userDetailsString) {
      this.userObj = JSON.parse(this.userDetailsString);
      this.userId = this.userObj.userId;
      this.restApiService.getUserById(this.userId)
      .subscribe((res: any) => {
        this.userDetails = res;
      })

    }
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

  addToWatchList(movieId: number ) {
    let body = {
      movieId: movieId
    }
    if(this.isUserLoggedIn) {
      this.restApiService.addToWatchlist(body)
      .subscribe((res) => {
        console.log(res);
        this.getTheUser();
      })
    }else {
      window.alert("SignIn to add this movie to Watchlist")
    }
  }

  addToLikeList(movieId: number ) {
    let body = {
      movieId: movieId
    }
    if(this.isUserLoggedIn) {
      this.restApiService.addToLikelist(body)
      .subscribe((res) => {
        console.log(res);
        this.getTheUser();
      })
    } else {
      window.alert("SignIn to like this movie")
    }
  }
}
