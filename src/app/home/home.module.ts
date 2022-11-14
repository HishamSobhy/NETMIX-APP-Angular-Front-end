import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { PopularComponent } from './popular/popular.component';
import { LatestTrailersComponent } from './latest-trailers/latest-trailers.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TopMoviesComponent } from './top-movies/top-movies.component';



@NgModule({
  declarations: [
    ShowMoviesComponent,
    PopularComponent,
    LatestTrailersComponent,
    MovieDetailsComponent,
    TopMoviesComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,
  ],
   exports: [ShowMoviesComponent,
    PopularComponent,
    TopMoviesComponent,
     LatestTrailersComponent 
  ]
})
export class HomeModule { }
