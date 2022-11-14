import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestTrailersComponent } from './home/latest-trailers/latest-trailers.component';
import { MovieDetailsComponent } from './home/movie-details/movie-details.component';
import { PopularComponent } from './home/popular/popular.component';
import { ShowMoviesComponent } from './home/show-movies/show-movies.component';
import { TopMoviesComponent } from './home/top-movies/top-movies.component';
import { Home } from './_models/home';
import { ListMoviesComponent } from './admin/list-movies/list-movies.component';
import {CreateDetailsComponent} from './admin/create-details/create-details.component'
import {AddMovieComponent} from './admin/add-movie/add-movie.component'
import { LoginComponent } from './core/header/login/login.component';
import { RegisterComponent } from './core/header/register/register.component';
import { ProfileComponent } from './core/header/profile/profile.component';
import { AdminServiesService } from './_servies/admin-servies.service';
const routes: Routes = [
 
{path:"home",component:ShowMoviesComponent},
{path:"showMovies",component:PopularComponent} ,
{path:"home/Detitl_Movies/:title",component:MovieDetailsComponent},
{path:"home/Detitl_Movies/",component:MovieDetailsComponent},
{path:"Top10Movies",component:TopMoviesComponent},
{path: 'CRUD_Admin', component: ListMoviesComponent },
{path: 'CRUD_Admin/UpdateMovies/:movieId', component:CreateDetailsComponent },
{path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path: 'profile', component: ProfileComponent },
 {path:"admin/addmovie",component:AddMovieComponent},

{path:"",redirectTo:"Home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
