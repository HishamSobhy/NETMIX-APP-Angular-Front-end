import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import {AdminModule} from './admin/admin.module'
import * as $ from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationService } from 'src/app/_servies/pagination.service';
import { TopMoviesComponent } from './home/top-movies/top-movies.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    FormsModule,
    AdminModule,
    NgxPaginationModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

  constructor(public page:PaginationService) {}





}
