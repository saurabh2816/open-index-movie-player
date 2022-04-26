import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomVideoComponent } from './custom-video/custom-video.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    AppComponent,
    CustomVideoComponent,
    HomeComponent,
    MovieCardComponent,
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
    MatIconModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
