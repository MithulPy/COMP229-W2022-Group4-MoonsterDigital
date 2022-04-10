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
 import { Player } from 'src/app/model/player.model';
 import { TournamentRepo } from 'src/app/model/tournament.repository';
 import { PlayerRepo } from 'src/app/model/player.repository';
 import { BulkWritePlayers } from 'src/app/model/bulkwriteplayers.model';

@Component({
  selector: 'app-tournament-add-player',
  templateUrl: './tournament-add-player.component.html',
  styleUrls: ['./tournament-add-player.component.scss']
})
export class TournamentAddPlayerComponent implements OnInit {
  title!: string;
  tournamentId!: number;
  editing = false;
  player: Player = new Player();
  playerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private repository: PlayerRepo,
  
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.createPlayerFormForm();
    this.tournamentId = activeRoute.snapshot.params['tournamentId'];

  }

  createPlayerFormForm() {    
      this.playerForm = this.formBuilder.group({
        tournamentId : [this.tournamentId],
        player1:[''],
        player2:[''],
        player3:[''],
        player4:[''],
        player5:[''],
        player6:[''],
        player7:[''],
        player8:[''],
      });
  }

  ngOnInit(): void {
    this.title = 'Player Registration';
  }

  onSubmit() {

    console.log(this.playerForm.value);

    this.repository.bulkWritePlayer(this.playerForm.value);
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
