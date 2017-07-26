import {EventEmitter,Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

import{Video} from '../video/video.model';

@Injectable()
export class VideoListService{

selected_video:Video=new Video(0,"Pitbull1",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","test5","test6","10.08.2017",4500000);
//selected_video:Video;
private videos:Video[]=[];
item_selected=new EventEmitter<Video>();

private url:string="https://movies-ws-project.herokuapp.com/";

    constructor(private http: Http){

    }

    getVideosByBand(band){
       this.http.get('$(this.url)/get_Movies_by_band/$band')
            .subscribe(
                (response:Response) => {
               this.videos=response.json();     
                });
             return this.videos;
    }

 getVideosByLocation(location){
       this.http.get(`${this.url}get_Movies_by_location/`,{params:{location:location}})
            .subscribe(
                (response:Response) => {
                this.videos=response.json();  
                });
            console.log(this.videos);
           return this.videos;
    }    

 getSelectedVideo(){
   return this.selected_video;
 }   

setSelectedVideo(video:Video){
this.selected_video=video;
this.item_selected.emit(this.selected_video);
 }

}