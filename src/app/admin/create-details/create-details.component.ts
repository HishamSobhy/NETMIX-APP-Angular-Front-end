import { Component, OnInit, NgModule, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from 'src/app/_models/home';
import { AdminServiesService } from 'src/app/_servies/admin-servies.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-details',
  templateUrl: './create-details.component.html',
  styleUrls: [
    './create-details.component.css',
    '../assets/css/templatemo-edu-meeting.css',
    '../assets/css/flex-slider.css',
    '../assets/css/owl.css',
    '../assets/css/lightbox.css',
    '../assets/css/fontawesome.css',
    '../assets/css/search.css',
  ],
})
export class CreateDetailsComponent implements OnInit {
  // ADD initial Object
  // MovieID:string="";
  // Update_Movie:Home | null=null;
  // Movie_update: Home 
  Movie_update 
  = new Home(
    '',
    '',
    '',
    0,
    0,
    '',
    '',
    0,
    0,
    // public actors:[]=[] ,
    // public genres:[]=[],
    ''
  );

  constructor(
    public Admin: AdminServiesService,
    public ar: ActivatedRoute,
    public router: Router
  ) {}

  save() {
    this.Admin.Update(this.Movie_update).subscribe(a =>{
      console.log(a)
      this.router.navigateByUrl("/CRUD_Admin")
    })
  }

  ngOnInit(): void {
    // console.log(this.ar.snapshot.params['movieId'])

    // this.Admin.getAllMovies_update(this.ar.snapshot.params['movieId']).subscribe(a =>{
    //   console.log(a);
    // })

    this.ar.params.subscribe((a) => {
      let MovieID = a['movieId'];

      console.log(MovieID);

      this.Admin.getAllMovies_update(MovieID).subscribe((h) => {
       // console.log(h);
       //@ts-ignore
        this.Movie_update = h[0];
        console.log(this.Movie_update);
      });
    });
  }
}
