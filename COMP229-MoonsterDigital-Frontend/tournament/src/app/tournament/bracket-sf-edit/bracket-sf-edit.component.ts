import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bracket-sf-edit',
  templateUrl: './bracket-sf-edit.component.html',
  styleUrls: ['./bracket-sf-edit.component.scss']
})
export class BracketSfEditComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  returnToTournamentList() {
    this.router.navigateByUrl('/tournament/list');
  }
}
