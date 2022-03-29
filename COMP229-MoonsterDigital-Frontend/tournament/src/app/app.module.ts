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


import { CommentComponent } from './pages/comment/comment.component';
import { ForumCommentsComponent } from './pages/forum-comments/forum-comments.component';
import { TopicComponent } from './pages/topic/topic.component';

import { RouterModule, Routes } from '@angular/router';
import { AddEditCommentComponent } from './pages/add-edit-comment/add-edit-comment.component';
import { ForumTopicsComponent } from './pages/forum-topics/forum-topics.component';
import { AddEditTopicComponent } from './pages/add-edit-topic/add-edit-topic.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';




//Routing
const routes: Routes = [
  { path: 'add-tournament', component: AddTournamentComponent },
  { path: '', component: HomeComponent },
  { path: 'forum-comments', component: ForumCommentsComponent },
  { path: 'forum/add-edit-comment', component: AddEditCommentComponent },
  { path: 'forum/forum-topics', component: ForumTopicsComponent },
  { path: 'forum/add-edit-topic', component: AddEditTopicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTournamentComponent,
    MainNavComponent,
    FooterComponent,
    HeaderComponent,
    TournamentListComponent,
    ForumCommentsComponent,
    CommentComponent,
    TopicComponent,
    AddEditCommentComponent,
    ForumTopicsComponent,
    AddEditTopicComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
