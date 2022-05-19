import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-video',
  templateUrl: './custom-video.component.html',
  styleUrls: ['./custom-video.component.scss']
})
export class CustomVideoComponent implements OnInit {

  @Input() url: string;
  constructor() { }

  ngOnInit(): void {
    console.log("custom player url: ", this.url);
  }

}
