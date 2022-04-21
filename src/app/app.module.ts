import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomVideoComponent } from './custom-video/custom-video.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomVideoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
