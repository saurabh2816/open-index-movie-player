import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  animationDone = false;
  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    console.log("custom player url: ", this.url);
    this.url = this.route.snapshot.queryParamMap.get('url');
    console.log("custom player url: ", this.url);

    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.animationDone = true;
     }, 4000);
    
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }


}
