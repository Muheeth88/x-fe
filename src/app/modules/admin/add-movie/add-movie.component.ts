import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private restApiService: RestApiService, private fb: FormBuilder, private router: Router) {}

  movieForm: FormGroup

  ngOnInit(): void {
   this.formCreation();
  }

  formCreation() {
    this.movieForm = this.fb.group({

    })
  }

  addMovie(movieForm: FormGroup) {
    console.log(movieForm.value)
  }

}
