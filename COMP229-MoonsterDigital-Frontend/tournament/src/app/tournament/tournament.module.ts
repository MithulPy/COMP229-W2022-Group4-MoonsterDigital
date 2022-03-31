/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 30th 2022
 * @CourseName Web Application Development SEC005
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentEditorComponent } from './tournament-editor/tournament-editor.component';

const routes = RouterModule.forChild([
  {
    path: 'list', component: TournamentListComponent, data: { title: 'Tournaments' },
  },
  {
    path: ':mode', component: TournamentEditorComponent,
  },
  {
    path: ':mode/:id', component: TournamentEditorComponent,
  },
]);

@NgModule({
  imports: [ModelModule, CommonModule, FormsModule, ReactiveFormsModule, routes],
  declarations: [TournamentListComponent, TournamentEditorComponent],
  exports: [TournamentListComponent]
})
export class TournamentModule {}
