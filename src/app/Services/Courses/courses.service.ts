import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourses } from 'src/app/ViewModels/icourses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses():Observable<Icourses[]>{
    return this.http.get<Icourses[]>(`${environment.URL}/courses`)
  }
}
