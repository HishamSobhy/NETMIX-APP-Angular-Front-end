
import { Component, OnInit } from '@angular/core';
import { ShowMoviesService } from 'src/app/_servies/show-movies.service';
import { Home } from 'src/app/_models/home';
import { PaginationService } from 'src/app/_servies/pagination.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css',
  '../assets/css/templatemo-edu-meeting.css',
  '../assets/css/flex-slider.css',
  '../assets/css/owl.css',
  '../assets/css/lightbox.css',
  '../assets/css/fontawesome.css',
  '../assets/css/search.css',]
})
export class TopMoviesComponent implements OnInit {
  Data_Top10Movies: Home[] = [];
  constructor(  public pagination: PaginationService,
    public Movies: ShowMoviesService
    ) { }

  ngOnInit(): void {

    this.Movies.getMoviestop10().subscribe((a) => {
      // console.log(a);
      this.Data_Top10Movies = a;
    });


  }

}
