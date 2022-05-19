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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  closeModal: string; // modal

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone, private modalService: NgbModal) {}

  ngOnInit() {  

  }


  // modal functions
  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  getDismissReason(reason: any): string {

      return  `with: ${reason}`;
    
  }

  
  playMovie(movie: Movie) {
    this.clickPlay = true;
    this.movieClicked = movie;
    this.cd.detectChanges();

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
