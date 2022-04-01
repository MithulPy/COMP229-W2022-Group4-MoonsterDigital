import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';

import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './admin/admin.module';
import { ForumModule } from './forum/forum.module';
import { TournamentModule } from './tournament/tournament.module';

import { TopicRepo } from 'src/app/model/topic.repository';
import { CommentRepo } from './model/comment.repository';

import { AuthService } from './model/auth.service';
import { TournamentRepo } from './model/tournament.repository';

/*export function jwtTokenGetter(): string
{
  return "12345";//localStorage.getItem('id_token');
}*/

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    ForumModule,
    TournamentModule,

    /*JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })*/
  ],
  providers: [TopicRepo, CommentRepo, TournamentRepo, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }