import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './header/register/register.component';
import { LoginComponent } from './header/login/login.component';
import { ProfileComponent } from './header/profile/profile.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
    ,RouterModule,
    FormsModule,
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
