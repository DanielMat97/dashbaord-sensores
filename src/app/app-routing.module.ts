import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoServiciosComponent } from './views/dashboard-children/geo-servicios/geo-servicios.component';
import { HomeComponent } from './views/dashboard-children/home/home.component';
import { RmcabComponent } from './views/dashboard-children/rmcab/rmcab.component';
import { RuidoComponent } from './views/dashboard-children/ruido/ruido.component';
import { SbcComponent } from './views/dashboard-children/sbc/sbc.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'rmcab', component: RmcabComponent
      },
      {
        path: 'sbc', component: SbcComponent
      },
      {
        path: 'geo', component: GeoServiciosComponent
      },
      {
        path: 'noise', component: RuidoComponent
      },
      {
        path: '**', pathMatch: 'full', redirectTo: '/dashboard/home'
      }
    ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
