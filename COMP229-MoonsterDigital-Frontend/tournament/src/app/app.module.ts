import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';

import { AddTournamentComponent } from './pages/add-tournament/add-tournament.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';


import { CommentComponent } from './pages/comment/comment.component';
import { ForumCommentsComponent } from './pages/forum-comments/forum-comments.component';
import { TopicComponent } from './pages/topic/topic.component';

import { RouterModule, Routes } from '@angular/router';
import { AddEditCommentComponent } from './pages/add-edit-comment/add-edit-comment.component';
import { ForumTopicsComponent } from './pages/forum-topics/forum-topics.component';
import { AddEditTopicComponent } from './pages/add-edit-topic/add-edit-topic.component';

import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { AdminModule } from './admin/admin.module';
import { ForumModule } from './forum/forum.module';

import { TopicRepo } from 'src/app/model/topic.repository';
import { CommentRepo } from './model/comment.repository';

export function jwtTokenGetter(): string
{
  return "12345";//localStorage.getItem('id_token');
}

//Routing
const routes: Routes = [
  { path: 'add-tournament', component: AddTournamentComponent },
  //{ path: '', component: HomeComponent },
  { path: 'forum-comments', component: ForumCommentsComponent },
  { path: 'forum/add-edit-comment', component: AddEditCommentComponent },
  { path: 'forum/forum-topics', component: ForumTopicsComponent },
  { path: 'forum/add-edit-topic', component: AddEditTopicComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AddTournamentComponent,
    FooterComponent,
    HeaderComponent,
    TournamentListComponent,
    ForumCommentsComponent,
    CommentComponent,
    TopicComponent,
    AddEditCommentComponent,
    ForumTopicsComponent,
    AddEditTopicComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    ForumModule,
    RouterModule.forRoot(routes),

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [TopicRepo, CommentRepo],
  bootstrap: [AppComponent]
})
export class AppModule { }
