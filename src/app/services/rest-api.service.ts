import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor( private http: HttpClient ) { }

  baseUrl: string = environment.serverUrl;

  // ------------------- Login
  login(form: any) {
    return this.http.post(`${this.baseUrl}/login`, form);
  }

  // -------------------- Register
  register(form: any) {
    return this.http.post(`${this.baseUrl}/users`, form)
  }

  // ------------------ Get my WatchList
  getMyWatchlist() {
    return this.http.get(`${this.baseUrl}/movies/watchlist`)
  }

  // ------------------ Get my WatchList
  getMyLikelist() {
    return this.http.get(`${this.baseUrl}/movies/likes`)
  }

  // ----------- Movies

  getAllMovies() {
    return new Observable((observable) => {
      this.http.get(`${this.baseUrl}/movies`)
      .subscribe({
        next: (res: any) => {
          observable.next(res)
        },
        error: (err) => {
          console.log("Error while API call!");
          console.error(err.message);
          observable.error(err)
        }
      })
    })
  }

}
