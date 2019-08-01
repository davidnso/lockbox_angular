import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SearchbarComponent } from './home/searchbar/searchbar.component';
import { BuidlingComponent } from './home/buidling/buidling.component';
import { MonitoringComponent } from './home/monitoring/monitoring.component';
import { AccountComponent } from './home/account/account.component';
import { ActivityComponent } from './home/activity/activity.component';
import { ArchivesComponent } from './home/archives/archives.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    BuidlingComponent,
    MonitoringComponent,
    AccountComponent,
    ActivityComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
