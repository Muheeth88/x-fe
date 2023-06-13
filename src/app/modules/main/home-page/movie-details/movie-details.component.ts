import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  faTrashCan = faTrashCan;
  faEdit = faEdit;

  jwtToken = localStorage.getItem("JwtToken")
  isUserLoggedIn: boolean = false;

  userString = localStorage.getItem("user")
  userObj: any = {};
  userId: number;

  movieId: any;
  movieDetails: any = {}

  reviewList: any = [];

 

  commentForm: FormGroup;
  editCommentForm: FormGroup;

  constructor( private route: ActivatedRoute, private restApiService: RestApiService, private fb: FormBuilder,) {}

  ngOnInit(): void {
    if(this.jwtToken) {
      this.isUserLoggedIn = true;
    }
    if(this.userString) {
      this.userObj = JSON.parse(this.userString);
      this.userId = this.userObj.userId;
    }
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    this.getMovieById();
    this.commentFormCreation();
    this.editCommentFormCreation();
  }

  getMovieById() {
    this.restApiService.getMovieById(this.movieId)
    .subscribe(
      (res: any) => {
        console.log(res, "!!!!!!!!!!!!");
        this.movieDetails = res;
        this.reviewList = res.reviews;
      }
    )
  }



  currentMovieId: number;
  commentDialog: boolean = false;

  openCommentDialog(movieId: number) {
    console.log(movieId)
    if(this.isUserLoggedIn) {
      this.currentMovieId = movieId;
      this.commentDialog = true;
      console.log(this.currentMovieId)
    } else {
      window.alert("SignIn to add reviews!")
    }
     
  }

  editCommentDialog: boolean = false;
  currentReviewId: number;
  openEditCommentDialog(review: any) {
    this.currentReviewId = review.reviewId;
    this.editCommentDialog = true;
    this.editCommentForm.patchValue(review)
  }

  commentFormCreation() {
    this.commentForm = this.fb.group({
      movieId : [null],
      comment: ["", Validators.required],
      title: [""]
    })
  }

  editCommentFormCreation() {
    this.editCommentForm = this.fb.group({
      movieId : [null],
      comment: ["", Validators.required],
      title: [""]
    })
  }



  editMyComment(editCommentForm: any ) {
    this.restApiService.editReview(this.currentReviewId, editCommentForm.value)
    .subscribe((res) => {
      console.log(res);
      console.log("Comment Edited!")
      this.getMovieById();
      this.editCommentDialog = false;
    })
  }

  addMyComment(commentForm: any) {
    commentForm.value.movieId = this.currentMovieId;
    this.restApiService.addReview(commentForm.value)
    .subscribe((res) => {
      console.log(res);
      console.log("Comment Added!")
      this.getMovieById();
      this.commentDialog = false;
    })
  }

  deleteMyComment(reviewId: number) {
    this.restApiService.deleteReview(reviewId).subscribe((res) => {
      console.log(res);
      this.getMovieById();
    })

  }

}
