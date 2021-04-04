import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoundResourcesAlbumsInterface, SoundResourcesInterface } from 'src/app/ViewModels/SoundResources/sound-resources-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoundResourcesServiceService {

  constructor(private http: HttpClient) { }
  getAllSoundResources(): Observable<SoundResourcesInterface[]>
  {
    return this.http.get<SoundResourcesInterface[]>(`${environment.URL}/sounds`)
  }
  getAllSoundResourcesAlbuums(): Observable<SoundResourcesAlbumsInterface[]>
  {
    return this.http.get<SoundResourcesAlbumsInterface[]>(`${environment.URL}/albums`)
  }
}
