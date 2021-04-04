import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoResourcesAlbumsInterface, VideoResourcesInterface } from 'src/app/ViewModels/VideoResources/video-resources-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoResourcesServiceService {

  constructor(private http : HttpClient) { }

  getAllVideoResources() : Observable<VideoResourcesInterface[]>{
    return this.http.get<VideoResourcesInterface[]>(`${environment.URL}/videos`)
  }

  getAllVideoResourcesAlbums(): Observable<VideoResourcesAlbumsInterface[]>
  {
    return this.http.get<VideoResourcesAlbumsInterface[]>(`${environment.URL}/Valbums`)
  }
}
