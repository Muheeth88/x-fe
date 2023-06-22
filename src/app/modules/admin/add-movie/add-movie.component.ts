import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private restApiService: RestApiService, private fb: FormBuilder, private router: Router) {}

  genres: any = [];

  movieForm: FormGroup

  ngOnInit(): void {
    this.getGenres();
   this.formCreation();
  }

  formCreation() {
    this.movieForm = this.fb.group({
      title: ["", Validators.required],
      tagline: [""],
      plotSummary: [""],
      originalLanguage: ["", Validators.required],
      countryOfOrigin: ["", Validators.required],
      rating:[""],
      // releaseDate: ["", Validators.required],
      releaseDate:  new FormControl<Date | null>(null),
      // genre: this.fb.array([])
      genre: new FormControl<any[] | null>(null)
    })
  }

  newGenre: any = []

  addMovie(movieForm: FormGroup) {
    if(movieForm.value.genre) {
      for(let i = 0; i < movieForm.value.genre.length; i++ ) {
        this.newGenre.push(movieForm.value.genre[i].genre)
      }
      movieForm.value.genre = this.newGenre;
    }
    console.log(movieForm.value)
    this.restApiService.addMovie(movieForm.value)
    .subscribe((res) => {
      console.log(res, "Movie Added!!!");
      this.router.navigate(["/", "home"])
    })
  }

  getGenres() {
    this.restApiService.getAllGenres().subscribe((res) => {
      console.log(res);
      this.genres = res;
    })
  }
}
