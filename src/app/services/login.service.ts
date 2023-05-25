import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:string = "https://localhost:7098/api/User/";

  constructor(private http:HttpClient) { }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  logIn(loginObj :any) {
    return this.http.post<any>(`${this.baseUrl}logIn`, loginObj);
  }
}

