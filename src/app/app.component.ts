import { Component, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-ui';

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;
   
  // or get it from plyrInit event
  player: Plyr;
   
  videoSources: Plyr.Source[] = [
    {
      src: 'http://167.114.174.132:9092/movies/Batch227/Resident.Evil.The.Final.Chapter.2016.720p.BluRay.x264-%5BYTS.AG%5D.mp4',
      type: 'video/mp4',
    },
  ];
   
  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
   
  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }
}
