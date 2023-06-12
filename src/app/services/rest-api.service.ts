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

  // --------------------------- get user by id
  getUserById(userId: number) {
    return this.http.get(`${this.baseUrl}/users/${userId}`)
  }

  // ------------------ Get my WatchList
  getMyWatchlist() {
    return this.http.get(`${this.baseUrl}/movies/watchlist`)
  }

  // ------------------------ Add to Watchlist
  addToWatchlist(body: any) {
    return this.http.post(`${this.baseUrl}/movies/watchlist`, body);
  }

  // ------------------ Get my LikeList
  getMyLikelist() {
    return this.http.get(`${this.baseUrl}/movies/likes`)
  }

  // ------------------------ Add to LikeList
  addToLikelist(body: any) {
    return this.http.post(`${this.baseUrl}/movies/likes`, body); 
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

  // -------------------get movie by Id
  getMovieById(movieId: any) {
    return this.http.get(`${this.baseUrl}/movies/${movieId}`)
  }

}
