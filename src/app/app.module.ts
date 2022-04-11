import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { HomeComponent } from './home/home.component';
import { ViewlistingComponent } from './viewlisting/viewlisting.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    CreateBookingComponent,
    CreateListingComponent,
    HomeComponent,
    ViewlistingComponent,
    ViewBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
