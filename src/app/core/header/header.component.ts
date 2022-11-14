import { Component, OnInit, NgModule } from '@angular/core';
import { ShowMoviesService } from 'src/app/_servies/show-movies.service';
import { TokenStorageService } from 'src/app/_servies/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    'search.css',
    'owl.css',
    'fontawesome.css',
    'lightbox.css',
  ],
})
export class HeaderComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    public Movies: ShowMoviesService,
    public tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if ((this.isLoggedIn = true)) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
    // this.Movies.getMoviesByTitle(title).subscribe(a => {
    //   console.log(a);
    //   this.Data_Movies = a;
    //}
  }

  logout(): void {
    this.tokenStorageService.signOut();
    console.log(this.tokenStorageService.signOut());
    // window.location.reload();
  }

  getValue(value: string) {
    console.warn(value);
  }
}
