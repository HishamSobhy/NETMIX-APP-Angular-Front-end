import { Home } from '../_models/home';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root',
})
export class ShowMoviesService {
  Data_Movies: Home[] = [];



  //all function calling this API
 baseUrl:string ="https://localhost:7160/api/Movies/"

 constructor(public http: HttpClient ) {
  http
    .get('https://localhost:7160/api/Movies/')
    .subscribe((a) => console.log(a));
}


  //GET all Movies from Back-end
  getAllMovies() {
    return this.http.get<Home[]>(this.baseUrl);
  }

  //GET MoviesByTitle from Back-end
  getMoviesByTitle(title: string) {
    return this.http.get<Home>(this.baseUrl+'Title?Title='+title)
    //   if (Movie_Name != null) {
    //     return Movie_Name;
    //   }
    
    // return alert('Not found This Film');
  }



    //GET MoviesTop6 from Back-end
    getMoviestop6() {
      
     return this.http.get<Home[]>(this.baseUrl+"top6")
    }

    //GET MoviesTop10 from Back-end
    getMoviestop10() {
      
      return this.http.get<Home[]>(this.baseUrl+"top10")
     }
}















