import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:7160/api/Register/';
//https://localhost:7160/api/Register/register

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    console.log(username,email,password)
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      password
    }, httpOptions);
    console.log(this.http.post(AUTH_API + 'register', {
      username,
      email,
      password
    }, httpOptions))
  }
}

