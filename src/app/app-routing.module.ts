import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { StatsComponent } from './stats/stats.component';
import { VolunteerDashComponent } from 'src/app/volunteer-dash/volunteer-dash.component';
import { PocDashComponent } from 'src/app/poc-dash/poc-dash.component';

const routes: Routes = [
  { path:'', component: LoginComponent }
  ,{ path:'login', component: LoginComponent }
  ,{ path:'register/:name', component: RegisterComponent, canActivate:[RouteGuardService] }
  ,{ path:'volunteer', component: VolunteerComponent, canActivate:[RouteGuardService] }
  ,{ path:'volunteerdash', component: VolunteerDashComponent }
  ,{ path:'volunteerdash/:name', component: VolunteerDashComponent }
  ,{ path:'pocdash', component: PocDashComponent }
  ,{ path:'pocdash/:name', component: PocDashComponent }
  ,{ path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]}
  ,{ path:'bar-chart', component: StatsComponent } 
  // ,{ path:'**', component: ErrorComponent, canActivate:[RouteGuardService] }
  ,{ path:'**', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
