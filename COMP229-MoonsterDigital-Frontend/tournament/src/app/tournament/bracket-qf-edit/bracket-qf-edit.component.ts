import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bracket-qf-edit',
  templateUrl: './bracket-qf-edit.component.html',
  styleUrls: ['./bracket-qf-edit.component.scss']
})
export class BracketQfEditComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  returnToTournamentList() {
    this.router.navigateByUrl('/tournament/list');
  }
}
