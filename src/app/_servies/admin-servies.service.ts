import { Injectable } from '@angular/core';
import {Home} from '../_models/home'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AdminServiesService {
  movieId:string=''
  Data_Movies: Home[] = [];



  add(formData: any): Observable<any> {
    return this._HttpClient.post<any>('https://localhost:7160/api/moviesadmin/addmovie', formData);
  }

  addDirector(data: any): Observable<any> {
    return this._HttpClient.post<any>('https://localhost:7160/api/MoviesAdmin/AddDirector', data);
  }

  addActor(data: any): Observable<any> {
    return this._HttpClient.post<any>('https://localhost:7160/api/MoviesAdmin/AddActor', data);
  }

  addGenre(data: any): Observable<any> {
    return this._HttpClient.post<any>('https://localhost:7160/api/MoviesAdmin/AddGenre', data);
  }

  getDirectors(): Observable<any> {
    return this._HttpClient.get<any>('https://localhost:7160/api/Movies/GetAllDirectors');
  }

  getActors(): Observable<any> {
    return this._HttpClient.get<any>('https://localhost:7160/api/Movies/GetAllActors');
  }

  getGenres(): Observable<any> {
    return this._HttpClient.get<any>('https://localhost:7160/api/Movies/GetAllGenres');
  }

  getMovieByGenre(): Observable<any> {
    return this._HttpClient.get<any>('https://localhost:7160/api/Movies/MovieByGenre');
  }


  //all function calling this API  /Movies/
 baseUrl:string ="https://localhost:7160/api/Movies/"
 baseUrl2:string ="https://localhost:7160/api/MoviesAdmin/"

 constructor(public http: HttpClient ,private _HttpClient: HttpClient) {
  http
    .get('https://localhost:7160/api/Movies/')
    .subscribe((a) => console.log(a));
}


  //GET all Movies from Back-end
  getAllMovies_list() {
    return this.http.get<Home[]>(this.baseUrl);
  }
// Get Movie by ID
  getAllMovies_update(movieId:string) {
    // console.log(this.http.get<Home>(this.baseUrl+movieId))
    return this.http.get<Home>(this.baseUrl+'MovieDetails?id='+movieId)
  }
  //delete Movie
 DelectMovieById(MovieId:string){
  return this.http.delete(this.baseUrl2+'Movie?id='+MovieId)
  console.log(this.http.delete(this.baseUrl2+'Movie?id='+MovieId))
 }
  
 Update(Data_Movies:Home){
 return this.http.put<Home>(this.baseUrl2+"Movie?id="+Data_Movies.movieId,Data_Movies)
}

}



