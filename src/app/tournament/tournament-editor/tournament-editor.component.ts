/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 30th 2022
 * @CourseName Web Application Development SEC005
 */

import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/model/tournament.model';
import { TournamentRepo } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-tournament-editor',
  templateUrl: './tournament-editor.component.html',
  styleUrls: ['./tournament-editor.component.scss']
})
export class TournamentEditorComponent implements OnInit {
  title!: string;

  editing = false;
  tournament: Tournament = new Tournament();
  tournamentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private repository: TournamentRepo,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    this.createTournamentFormForm();

    if (this.editing) {
      
      let cloneObj = Object.assign(this.tournament, repository.getTournament(activeRoute.snapshot.params['id']));
      //let cloneObj = Object.assign({}, this.tournamentForm.getRawValue(), this.tournament);
      this.tournamentForm.patchValue(cloneObj);

      // manually set date
      this.tournamentForm.get('startDate')!.setValue(this.getSplittedISODateString(this.tournament.startDate!));
      this.tournamentForm.get('endDate')!.setValue(this.getSplittedISODateString(this.tournament.endDate!));
    }
  }

  createTournamentFormForm() {    
      this.tournamentForm = this.formBuilder.group({
        _id: [],
        owner: ['', Validators.required],
        title: ['', Validators.required],
        description: ['', Validators.required],
        isActive: ['', Validators.required],
        isCompleted: ['', Validators.required],
        players: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        rounds: ['', Validators.required],
      });
  }

  ngOnInit(): void {
    this.title = this.editing ? 'Edit Tournament' : 'Add Tournament';
  }

  onSubmit() {
    this.tournamentForm.value.startDate = new Date(this.tournamentForm.value.startDate);
    this.tournamentForm.value.endDate = new Date(this.tournamentForm.value.endDate);
    console.log(this.tournamentForm.value);

    this.repository.modifyTournament(this.tournamentForm.value, this.tournamentForm.value._id);
    this.router.navigateByUrl('/tournament/list');
  }

  getSplittedISODateString(date: Date): string {
    if (date == null)
      return '';
    else
      return new Date(date).toISOString().split('T')[0];
  }

  returnToTournamentList() {
    this.router.navigateByUrl('/tournament/list');
  }
}
