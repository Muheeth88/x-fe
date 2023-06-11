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

  constructor(private router: Router,
    private restApiService: RestApiService
     ) {}
  
  ngOnInit(): void { 
    this.userDetails.userName = "USER";
    if(this.userDetailsString) {
      this.userDetails = JSON.parse(this.userDetailsString);
    }
    console.log(this.userDetails)
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

  showWatchListDialog() {
    this.restApiService.getMyWatchlist()
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log("Something Went Wrong!")
        console.log(err);
      }
    )
    this.showWatchlist = true;
  }
  showLikeListDialog() {
    this.restApiService.getMyLikelist()
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log("Something Went Wrong!")
        console.log(err);
      }
    )
    this.showLikelist = true;
  }

 

}
