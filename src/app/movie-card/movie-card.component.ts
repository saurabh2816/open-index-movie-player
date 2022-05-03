import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   },
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() data: any[];
  @Input() src:string;
  @Input() default:string;

  playMovie: boolean = false;
  currentMovieClicked: number;
  currentMovieUrl: string;

  constructor() { }

  ngOnInit(): void {
    console.log("card: ", this.data);
  }

  public openMovie(url: string, i: number) {
  
    this.currentMovieClicked = i;
    this.currentMovieUrl = url;
    this.playMovie = true;
    console.log(url);

  }

  updateUrl(e: any) {
  console.log("mai idhar aya ", e);
  this.src = this.default
  }

}
