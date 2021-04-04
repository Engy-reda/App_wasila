import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/ViewModels/ievent';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) { }

  getEvents():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(`${environment.URL}/events`)
  }

  getEvent(eventId:number):Observable<IEvent>{
    return this.http.get<IEvent>(`${environment.URL}/events/${eventId}`)
  }

}
