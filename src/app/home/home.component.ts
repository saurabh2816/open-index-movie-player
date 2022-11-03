import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  getMoviesLoaded: boolean = false;
  defaultCardPoster: string = "saurabhrana.com";

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.getMoviesLoaded = true;

    this.movieService.getMovies().subscribe( data => {

       this.data = data;
       this.getMoviesLoaded = true;
       
    })
  } 
}
