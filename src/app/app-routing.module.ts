import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{VideoPlayComponent} from './video-play/video-play.component';
import  {ShowLastUploadsComponent} from './show-last-uploads/show-last-uploads.component';
import {UploadComponent} from './upload/upload.component';
import{AsideTopListComponent} from './aside-top-list/aside-top-list.component';
import {ShowAllLocationComponent} from './show-all-location/show-all-location.component';
import {VideoListComponent} from './aside-app/video-list/video-list.component';
import {SearchPageComponent} from './search-page/search-page.component';


const appRoutes: Routes=[
{path: '', redirectTo: '/video-play', pathMatch:'full'},
{path:'video-play', component: VideoPlayComponent },
{path:'show-last-uploads', component: ShowLastUploadsComponent },
{path:'aside-top-list', component: AsideTopListComponent },
{path:'upload', component: UploadComponent },
{path:'show-all-location', component: ShowAllLocationComponent },
{path:'video-list', component:VideoListComponent},
{path:'search',component:SearchPageComponent},
{path:'last-uploads',component:ShowLastUploadsComponent}



];
console.log('app routes loading...');
@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
    exports: [RouterModule]
    
})

export class AppRoutingModule{

}