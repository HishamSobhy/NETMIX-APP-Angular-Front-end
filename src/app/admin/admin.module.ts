import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {  AppRoutingModule} from '../app-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CreateDetailsComponent } from './create-details/create-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListMoviesComponent,
    AddMovieComponent,
    CreateDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule ,
    FormsModule ,
    ReactiveFormsModule
    ]
})
export class AdminModule { }
