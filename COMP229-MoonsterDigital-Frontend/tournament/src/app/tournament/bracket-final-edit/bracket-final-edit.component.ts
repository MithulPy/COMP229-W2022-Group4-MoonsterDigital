import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bracket-final-edit',
  templateUrl: './bracket-final-edit.component.html',
  styleUrls: ['./bracket-final-edit.component.scss']
})
export class BracketFinalEditComponent implements OnInit {

  constructor(    private router: Router  ) { }

  ngOnInit(): void {
  }
  returnToTournamentList() {
    this.router.navigateByUrl('/tournament/list');
  }
}
