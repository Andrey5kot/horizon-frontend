import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {HomeComponent} from "./home/home.component";
import {TourEditPageComponent} from "./tour/tour-edit-page/tour-edit-page.component";
import {TourInfoPageComponent} from "./tour/tour-info-page/tour-info-page.component";
import { AllToursPageComponent } from "./tour/all-tours-page/all-tours-page.component";
import { TourBookingsComponent } from "./tour/tour-bookings/tour-bookings.component";
import { ProfileInfoPageComponent } from "./user/profile/profile-info-page/profile-info-page.component";
import { ProfileEditPageComponent } from "./user/profile/profile-edit-page/profile-edit-page.component";
import { MyHistoryComponent } from "./my-history/my-history.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'tours', component: AllToursPageComponent
  },
  {
    path: 'tour/edit', component: TourEditPageComponent
  },
  {
    path: 'tour/edit/:id', component: TourEditPageComponent
  },
  {
    path: 'tour/info/:id', component: TourInfoPageComponent
  },
  {
    path: 'profile/info/:id', component: ProfileInfoPageComponent
  },
  {
    path: 'profile/edit/:id', component: ProfileEditPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'requests', component: TourBookingsComponent
  },
  {
    path: 'my-history', component: MyHistoryComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
