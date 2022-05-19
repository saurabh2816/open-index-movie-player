import { ChangeDetectorRef, Component, Input, NgZone, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../model/Movie';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { BehaviorSubject } from 'rxjs';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade
]);



@Component({
  selector: 'app-movie-card',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   },
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MovieCardComponent implements OnInit {
  
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  @Input() data: any[];
  @Input() src:string;
  currentMovieClicked: number;
  currentMovieUrl: string;
  clickPlay: boolean = false;
  movieClicked: Movie;
  

  show: boolean;
  thumbs: any;
  slides$ = new BehaviorSubject<string[]>(['']);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`);

  ngOnInit() {  

  }

 

  playMovie(movie: Movie) {
    this.clickPlay = true;
    this.movieClicked = movie;
    this.cd.detectChanges();

  }

  getSlides() {
    this.slides$.next(Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`));
  }



  getMovieUrl(movie: Movie) {
    return movie.link;
  }



  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  getTwoActors(actors: string) {
    return actors.split(",").splice(0, 2);
  } 

  getMovieGenres(genres: string) {
    // Horror&nbsp; • &nbsp;Mystery&nbsp; • &nbsp;Thrille

    return genres.split(",").join(" • ");

  }
}
