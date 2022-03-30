import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: RegisterComponent },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [BrowserModule, ModelModule, FormsModule, ReactiveFormsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, RegisterComponent]
})
export class AdminModule {}
