import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Minicourse} from 'src/app/ViewModels/minicourse'
@Injectable({
  providedIn: 'root'
})
export class MiniCoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Minicourse[]>
  {
    return this.http.get<Minicourse[]>(`${environment.URL}/minicourses`)
  }
}
