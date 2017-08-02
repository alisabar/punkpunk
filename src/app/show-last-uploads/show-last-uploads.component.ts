import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

import  {VideoListService} from '../services/video-list.service';
import { Video} from '../video/video.model';

@Component({
  selector: 'app-show-last-uploads',
  templateUrl: './show-last-uploads.component.html',
  styleUrls: ['./show-last-uploads.component.css']
})
export class ShowLastUploadsComponent implements OnInit {

  
video_list:Video[]=[];

  constructor(private videolistservice:VideoListService) { }

  ngOnInit() {

      this.videolistservice.getVideosByUser("avi").subscribe(
(res:Response)=>{
    this.video_list=res.json();
  }
  );


}
}