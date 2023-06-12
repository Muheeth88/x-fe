import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userDetailsString = localStorage.getItem("user");
  userDetails: any = {};
  jwtToken = localStorage.getItem("JwtToken")

  isUserLoggedIn: boolean = false;

  myWatchList: any = [];
  myLikeList: any = [];

  constructor(private router: Router,
    private restApiService: RestApiService
  ) {}
  
  ngOnInit(): void { 
    this.userDetails.userName = "USER";
    if(this.jwtToken) {
      this.isUserLoggedIn = true;
    }
    if(this.userDetailsString) {
      this.userDetails = JSON.parse(this.userDetailsString);
    }
    console.log(this.userDetails)
    this.getMyWatchlist();
    this.getMyLikelist();
  }

  gotoLoginPage() {
    console.log(localStorage.clear())
    this.router.navigate(['/', "auth", "login"])
  }

  logout() {
    console.log(localStorage.clear())
    this.router.navigate(['/', "auth", "login"])
  }

  showWatchlist: boolean = false;
  showLikelist: boolean = false;

  getMyWatchlist() {
    if(this.isUserLoggedIn) {
      this.restApiService.getMyWatchlist()
      .subscribe(
        (res) => {
          console.log(res);
          this.myWatchList = res;
        },
        (err) => {
          console.log("Something Went Wrong!")
          console.log(err);
        }
      )
    }
  }

  getMyLikelist() {
    if(this.isUserLoggedIn) {
      this.restApiService.getMyLikelist()
      .subscribe(
        (res) => {
          console.log(res);
          this.myLikeList = res;
        },
        (err) => {
          console.log("Something Went Wrong!")
          console.log(err);
        }
      )
    }
  }


  showWatchListDialog() {
    this.showWatchlist = true;
  }

  showLikeListDialog() {
   
    this.showLikelist = true;
  }

}
