import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookingsComponent } from './bookings/bookings.component';
import { ViewlistingComponent } from './booklisting/booklisting.component';
import { CreateListingComponent } from './createlisting/createlisting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booklisting/:id', component: ViewlistingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'bookings', component: CreateBookingsComponent },
  { path: 'createlisting', component: CreateListingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }