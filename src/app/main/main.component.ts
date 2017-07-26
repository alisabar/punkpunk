import { Component, OnInit } from '@angular/core';
import { Video} from '../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';

import  {VideoListService} from '../services/video-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

main_video:Video;

  constructor(private sanitizer: DomSanitizer ,private videolistservice:VideoListService) {
   }

videoURL(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.main_video.embedded.toString());
}

  ngOnInit() {
this.main_video=this.videolistservice.getSelectedVideo();
   
 this.videolistservice.item_selected.subscribe(
   (video:Video) => {
               this.main_video=video;
          }
    );
  }
}
