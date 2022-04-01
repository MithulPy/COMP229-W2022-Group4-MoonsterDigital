import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './admin/auth/auth.component';
import { RegisterComponent } from './admin/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'login', component: AuthComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)},
  { path: 'tournament', loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
