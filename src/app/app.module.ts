import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomVideoComponent } from './custom-video/custom-video.component';
import { HomeComponent } from './home/home.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { SwiperModule } from 'swiper/angular';
import { SimpleModalModule } from 'ngx-simple-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    CustomVideoComponent,
    HomeComponent,
    MovieCarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    SwiperModule,
    SimpleModalModule,
    NgbModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

