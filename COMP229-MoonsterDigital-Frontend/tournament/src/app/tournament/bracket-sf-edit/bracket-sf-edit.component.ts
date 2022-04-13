import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentRepo } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-bracket-sf-edit',
  templateUrl: './bracket-sf-edit.component.html',
  styleUrls: ['./bracket-sf-edit.component.scss']
})
export class BracketSfEditComponent implements OnInit {

  constructor(private repository: TournamentRepo,private router: Router ) { }

  ngOnInit(): void {
  }

  returnToTournamentList() {
    this.router.navigateByUrl('/tournament/list');
  }

  isLoggedIn(): boolean
  {    
    return this.repository.authenticated;
  }
}
