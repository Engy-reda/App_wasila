import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from "src/app/ViewModels/Register/register";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
  

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient,
    public afAuth: AngularFireAuth) { 
    
  }
  getAllUserRegister(): Observable <Register[]>
  {
    return this.http.get<Register[]>(`${environment.URL}/users`);
  }
  getUserRegisterByID(pID: number): Observable <Register>
{
  return this.http.get<Register>(`${environment.URL}/users/${pID}`);
}

login(Token: string){
  // alert (Token);
  localStorage.setItem('UserToken', Token);
}

logout(){
  localStorage.removeItem('UserToken');
}

isLogged(): boolean {
  if (localStorage.getItem('UserToken')) {
    return true ;
    
  }
  else {
    return false;
  }
}
  addUserRegister(prd: Register):Observable<any>
{
  console.log(prd);
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,'Accept':' */*'
    //,'Authorization': 'my-auth-token'
      })};
    
  return this.http.post<any>(`${environment.URL}/users`,prd, httpOptions);
}

doRegister(value : any){
  return new Promise<any>((resolve, reject) => {
    firebase.default.app().auth().createUserWithEmailAndPassword(value.email, value.password)
    .then((res: any) => {
      resolve(res);
    }, (err: any) => reject(err))
  })
}
}
