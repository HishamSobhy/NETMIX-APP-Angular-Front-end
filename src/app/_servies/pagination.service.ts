import { Home } from '../_models/home';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import {Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  getAllMovies() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpService:HttpClient) { }


  getData() {
    return this.httpService.get
    ('https://jsonplaceholder.typicode.com/todos');
   }

}
