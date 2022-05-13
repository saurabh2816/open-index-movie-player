import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Movie } from "../model/Movie";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {

    apiURL = environment.apiURL;  

    constructor(private http: HttpClient) {}

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.apiURL + 'getAll')
        .pipe(retry(1), catchError(this.handleError))
    }

    saveMovies() {
      return this.http.get<any>(this.apiURL + 'saveAllMoviesFromALink')
      .pipe(retry(1), catchError(this.handleError))
    }


    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
          return errorMessage;
        });
      }
  
}
