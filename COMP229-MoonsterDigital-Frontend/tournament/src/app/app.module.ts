import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/about/home/home.component';
import { AddTournamentComponent } from './pages/add-tournament/add-tournament/add-tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
