
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/_models/home';
import { AdminServiesService } from 'src/app/_servies/admin-servies.service';
import { ShowMoviesService } from 'src/app/_servies/show-movies.service';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css',
  '../assets/css/templatemo-edu-meeting.css',
  '../assets/css/flex-slider.css',
  '../assets/css/owl.css',
  '../assets/css/lightbox.css',
  '../assets/css/fontawesome.css',
  '../assets/css/search.css',
  

]
})
export class ListMoviesComponent implements OnInit {
  deleteMovie :Home | null=null ;
  movies_list : Home[] = []
  Add(){
    this.router.navigateByUrl("/admin/addmovie");
  }

  Update(){

  }


  constructor(public router:Router, public Movies: AdminServiesService ) { }


  Delete(movieId:string){
   if(confirm("Are you sure Delete this Movie ")== true){
    this.Movies.DelectMovieById(movieId).subscribe(a =>{
      this.Movies.getAllMovies_list().subscribe(h =>{
        this.movies_list = h;
      })
    })}
  }

  ngOnInit(): void {
     this.Movies.getAllMovies_list().subscribe(data =>{
      console.log(data)
      this.movies_list= data
    })
  }

}
