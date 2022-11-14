import { Component, OnInit,Input   } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/_models/home';
import { PaginationService } from 'src/app/_servies/pagination.service';
import { ShowMoviesService } from 'src/app/_servies/show-movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: [
    './movie-details.component.css',
    '../assets/css/templatemo-edu-meeting.css',
    '../assets/css/flex-slider.css',
    '../assets/css/owl.css',
    '../assets/css/lightbox.css',
    '../assets/css/fontawesome.css',
    '../assets/css/search.css'
]
})
export class MovieDetailsComponent implements OnInit {
 @Input() film_name:string ="";

  title:string=""
   

  Detitl_Movie:Home | null=null;
  searchText:String=""

  searchTextchangeEnter(search_value:string){
  this.searchText =search_value
  console.log(this.searchText)
  }

  constructor(public Movies:ShowMoviesService ,public ar:ActivatedRoute) { }

  ngOnInit(): void {

  this.ar.params.subscribe(a =>{
    this.title = a['title'];
    this.Movies.getMoviesByTitle(this.title).subscribe(
      h =>{
        console.log(h);
        this.Detitl_Movie = h;
      }
    )
  } )
         console.log(this.film_name)
      this.Movies.getMoviesByTitle("film_name").subscribe(a=>{
        alert("Hallo you in details componant")
        //  console.log(a)
        this.Detitl_Movie =a;
        console.log(this.Detitl_Movie)
      })
    

  }




}
