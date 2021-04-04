import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {AlumniModel} from '../ViewModels/alumni-model';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  private alumniList: AlumniModel[] =[];
  constructor(private http: HttpClient) {} 

  getAllAlumni(): Observable <AlumniModel[]>
  {
    // console.log( this.http.get<AlumniModel[]>(`${environment.URL}/alumniLists`))
     return this.http.get<AlumniModel[]>(`${environment.URL}/alumniLists`);
  }
}
