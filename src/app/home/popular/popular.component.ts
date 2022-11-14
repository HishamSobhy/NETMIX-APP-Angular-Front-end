import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from 'src/app/_models/home';
import { ShowMoviesService } from 'src/app/_servies/show-movies.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: [
    './popular.component.css',
  '../assets/css/templatemo-edu-meeting.css'
],

})

export class PopularComponent implements OnInit {
  Data_Top6Movies: Home []=[]

  constructor(public Movies:ShowMoviesService) { 


  }

  ngOnInit(): void {

    this.Movies.getMoviestop6().subscribe(a => {
      // console.log(a);
      this.Data_Top6Movies = a;
    });

  }

}
