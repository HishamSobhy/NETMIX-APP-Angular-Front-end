import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/_models/home';
import { AdminServiesService } from 'src/app/_servies/admin-servies.service';
import { FormControl, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css',
  '../assets/css/templatemo-edu-meeting.css',
  '../assets/css/flex-slider.css',
  '../assets/css/owl.css',
  '../assets/css/lightbox.css',
  '../assets/css/fontawesome.css',
  '../assets/css/search.css'
]
})
export class AddMovieComponent implements OnInit {

  movies: any;
  directorList: any;
  actorList: any;
  genreList: any;
  nmov: Home = new Home();

  genreSelected:any;
  actorSelected:any;
  directorSelected:any;

  constructor(public router: Router, public _addService: AdminServiesService) { }

  public addForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.min(1)),
    votes: new FormControl(null, Validators.min(1)),
    imageUrl: new FormControl(null, Validators.required),
    trailerUrl: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.min(1)),
    duration: new FormControl(null, Validators.min(1)),
    directorName: new FormControl(null, Validators.required),
    //directorId: new FormControl(null, Validators.required),
    actorName: new FormControl(null, Validators.required),
    genreName: new FormControl(null, Validators.required),
  });

  onOptionsSelected(value:any){
    console.log("the selected value is " + value);
    var newArray = this.genreList.filter(function(item:any)
    {
      return item.genreName == value;
    });
   this.genreSelected=newArray;
}

  onActorSelected(value:any){
    console.log("the selected Actor is " + value);
    var actorArray = this.actorList.filter(function(item:any)
    {
      return item.actorName == value;
    });
  this.actorSelected=actorArray;
  }

  onDirectorSelected(value:any){
    console.log("the selected Director is " + value);
    var directorArray = this.directorList.filter(function(item:any)
    {
      return item.directorName == value;
    });
  this.directorSelected=directorArray;
  }

  addDirector(data: any) {
    console.warn(data);
    this._addService.addDirector(data).subscribe((result) => {
      console.warn(result);
    })
  }

  addActor(data: any) {
    console.warn(data);
    this._addService.addActor(data).subscribe((result) => {
      console.warn(result);
    })
  }

  addGenre(data: any) {
    console.warn(data);
    this._addService.addGenre(data).subscribe((result) => {
      console.warn(result);
    })
  }

  save(addForm: FormGroup) {
    console.log(addForm.value);

    const { actorName, description, directorId, directorName,
      duration, genreName, imageUrl, rating, title, trailerUrl, votes, year } = addForm.value

    const formatedData = {
      title,
      description,
      rating,
      votes,
      imageUrl,
      trailerUrl,
      year,
      duration,
      director: {
        directorId,
        directorName
      },
      actors: this.actorSelected,
      genres: this.genreSelected
    }

    this._addService.add(formatedData).subscribe((response: any) => {
      console.warn("Result", response);
    })
  }

  ngOnInit(): void {
    this._addService.getDirectors().subscribe((dataDir: any) => {
      console.log("Director", dataDir)
      this.directorList = dataDir;
    })

    this._addService.getActors().subscribe((dataAct: any) => {
      console.log("Actor", dataAct);
      this.actorList = dataAct;
    })

    this._addService.getGenres().subscribe((dataGen: any) => {
      this.genreList = dataGen;
    })

  }

}
