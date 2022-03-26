import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTournamentComponent } from './pages/add-tournament/add-tournament.component';
import { MainNavComponent } from './partials/main-nav/main-nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTournamentComponent,
    MainNavComponent,
    FooterComponent,
    HeaderComponent,
    TournamentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
