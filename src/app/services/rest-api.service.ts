import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor( private http: HttpClient ) { }

  baseUrl: string = environment.serverUrl;

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
