import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-save-movies',
  templateUrl: './save-movies.component.html',
  styleUrls: ['./save-movies.component.scss']
})
export class SaveMoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.saveMovies().subscribe( 
      data => console.log("movies saved :: ", data)
      );
    
  }

}
