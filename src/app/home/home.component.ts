import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.getMovies().subscribe( data => {
      console.log(data);
       this.movieList = data;
    })
  } 
}
