import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user/user.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserShowListComponent } from './user-show-list/user-show-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'show-users-list',  component: UserShowListComponent},
  { path: 'show-user/:id',  component: UserShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
