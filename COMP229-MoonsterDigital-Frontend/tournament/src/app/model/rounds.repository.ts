/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date April 06th 2022
 * @CourseName Web Application Development SEC005
 */

import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { TournamentRepo } from './tournament.repository';
import { Rounds } from './rounds.model';
import { BulkWriteRounds } from './bulkwriterounds.model';

@Injectable()
export class RoundsRepo {
    private rounds: Rounds[] = [];

    constructor(private dataSource: RestDataSource,
        private tournamentRepo: TournamentRepo) {
        this.refresh();
    }

    refresh(): void{
        this.dataSource.getRounds().subscribe(data => {
            this.rounds = data;
            this.storeRoundData(data);
        });
    }

    storeRoundData(rounds: Rounds[]) {
      localStorage.setItem('rounds', JSON.stringify(rounds));
      this.rounds = rounds;
    }
  
    loadRounds(): void{
      this.rounds = JSON.parse(localStorage.getItem('rounds')!);
    }

    getRounds() {
        this.loadRounds();
        return this.rounds;
    }

    getRoundsByTournamentId(tournamentId: number){
        this.loadRounds();
        return this.rounds.find(a => a.TournamentId === tournamentId);
    }

    upsertQuarterFinals(winners: any): void {        
        this.dataSource.upsertQuarterFinalResults(winners).subscribe(b => {
            this.refresh();
            this.tournamentRepo.refresh();
        });
    }

    upsertSemiFinals(winners: any): void {        
        this.dataSource.upsertSemiFinalResults(winners).subscribe(b => {
            this.refresh();
            this.tournamentRepo.refresh();
        });
    }

    upsertFinals(winners: any): void {        
        this.dataSource.upsertFinalResults(winners).subscribe(b => {
            this.refresh();
            this.tournamentRepo.refresh();
        });
    }

    get authenticated(): boolean
    {
      return this.dataSource.loggedIn();
    }
}