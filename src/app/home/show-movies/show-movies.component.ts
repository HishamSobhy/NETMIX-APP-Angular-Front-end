import {
  Component,
  NgModule,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from 'src/app/_models/home';
import { ShowMoviesService } from 'src/app/_servies/show-movies.service';
import { Title } from '@angular/platform-browser';
import { SelectorMatcher } from '@angular/compiler';
import { PaginationService } from 'src/app/_servies/pagination.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule,
//     NgxPaginationModule
//   ],
//   }),

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',

  template: `
    <ul>
      <li
        *ngFor="
          let item of collection
            | paginate: { itemsPerPage: 10, currentPage: p }
        "
      >
        ...
      </li>
    </ul>

    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `,
  styleUrls: [
    './show-movies.component.css',
    '../assets/css/templatemo-edu-meeting.css',
    '../assets/css/flex-slider.css',
    '../assets/css/owl.css',
    '../assets/css/lightbox.css',
    '../assets/css/fontawesome.css',
    '../assets/css/search.css',
  ],
})
export class ShowMoviesComponent implements OnInit {
  // @Output()
  film_name: string = '';
  movie: Home[] = [];
  Data_Top6Movies: Home[] = [];
  Data_Movies: Home[] = [
    //   new Home(
    // '5e633f7c-6a8c-4658-90b7-08d71c261c47',
    //   'Zero Dark Thirty',
    //   'A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L.s Team 6 in May 2011.',
    //   7.4,
    //   226661,
    //   'notfound',
    //   'NotFound',
    //   2012,
    //   157,
    //   [],
    //   [],
    //   'Director_name')
  ];

  // Data_Movies: Home = new Home(

  // );

  constructor(
    public pagination: PaginationService,
    public Movies: ShowMoviesService
  ) {}

  title: string = '';
  @Output()
  searchTextchange: EventEmitter<string> = new EventEmitter<string>();

  search(title_search:string) {
    this.searchTextchange.emit(this.title);

    this.film_name =title_search;
   console.log(this.film_name)
    // this.Movies.getMoviesByTitle(this.title).subscribe((a) => {
    //   console.log(a);
    //   // this.film_name = this.title
    //   this.movie = a;
    //   console.log(this.movie)
    // });
  }

  ngOnInit(): void {
    this.Movies.getMoviestop6().subscribe((a) => {
      // console.log(a);
      this.Data_Top6Movies = a;
    });

    this.Movies.getAllMovies().subscribe((a) => {
      // console.log(a);
      this.Data_Movies = a;
    });
  }

  p: any;
  data: any = [];
  getData() {
    this.pagination.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  getAllMovies() {}
}
