import { Component, Input, OnInit } from '@angular/core';
import { VgAPI } from 'ngx-videogular';

@Component({
  selector: 'app-custom-video',
  templateUrl: './custom-video.component.html',
  styleUrls: ['./custom-video.component.scss']
})
export class CustomVideoComponent implements OnInit {

  @Input() url: any;
  @Input() srt: string;
  api: VgAPI;
  constructor() { }

  ngOnInit(): void {
    console.log("custom player url: ", this.url);
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }


}
