import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/dashboard-children/home/home.component';
import { RmcabComponent } from './views/dashboard-children/rmcab/rmcab.component';
import { SbcComponent } from './views/dashboard-children/sbc/sbc.component';
import { GeoServiciosComponent } from './views/dashboard-children/geo-servicios/geo-servicios.component';
import { RuidoComponent } from './views/dashboard-children/ruido/ruido.component';
import { TimeComponent } from './components/time/time.component';
import { MenuSbcComponent } from './components/menu-sbc/menu-sbc.component';
import { TableSbcComponent } from './components/table-sbc/table-sbc.component';
import { GeoReferenceSbcComponent } from './components/geo-reference-sbc/geo-reference-sbc.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    RmcabComponent,
    SbcComponent,
    GeoServiciosComponent,
    RuidoComponent,
    TimeComponent,
    MenuSbcComponent,
    TableSbcComponent,
    GeoReferenceSbcComponent,
    FooterComponent,
    HeaderMobileComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
