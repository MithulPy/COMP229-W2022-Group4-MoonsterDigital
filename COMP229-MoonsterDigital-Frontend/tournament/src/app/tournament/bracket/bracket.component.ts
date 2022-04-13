import { Component, OnInit } from '@angular/core';
import { TournamentRepo } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {

  constructor(private repository: TournamentRepo) { }

  ngOnInit(): void {
  }
  isLoggedIn(): boolean
  {    
    return this.repository.authenticated;
  }
}
