import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogInterface, CommentsInterface, CoursesInterface } from 'src/app/ViewModels/blog/blog-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<BlogInterface[]>
  {
    return this.http.get<BlogInterface[]>(`${environment.URL}/blog`)
  }
  getAllCourses(): Observable<CoursesInterface[]>
  {
    return this.http.get<CoursesInterface[]>(`${environment.URL}/coursess`)
  }
  getAllComments(): Observable<CommentsInterface[]>
  {
    return this.http.get<CommentsInterface[]>(`${environment.URL}/comments`)
  }
}
