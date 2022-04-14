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
export class RoundRepo {
    private rounds: Rounds[] = [];
    private bulkWriteRounds: BulkWriteRounds[] = [];

    constructor(private dataSource: RestDataSource,
        private tournamentRepo: TournamentRepo) {
        this.refresh();
    }

    refresh(): void{
        this.dataSource.getRounds().subscribe(data => {
            this.rounds = data;
            this.storeRoundData(data);
        });
        this.dataSource.getBulkWriteRounds().subscribe(data => {
            this.bulkWriteRounds = data;
            this.storeBulkWriteRoundsData(data);
        });
    }

    storeRoundData(rounds: Rounds[]) {
      localStorage.setItem('rounds', JSON.stringify(rounds));
      this.rounds = rounds;
    }
  
    loadRounds(): void{
      this.rounds = JSON.parse(localStorage.getItem('rounds')!);
    }

    storeBulkWriteRoundsData(bulkWriteRounds: BulkWriteRounds[]) {
        localStorage.setItem('bulkWriteRounds', JSON.stringify(bulkWriteRounds));
        this.bulkWriteRounds = bulkWriteRounds;
    }

    loadBulkWriteRounds(): void {
        this.bulkWriteRounds = JSON.parse(localStorage.getItem('bulkWriteRounds')!);
    }

    getRounds() {
        this.loadRounds();
        return this.rounds;
    }

    getRoundsByTournamentId(tournamentId: any){
        this.loadRounds();
        return this.rounds.filter(a => a.tournamentId === tournamentId);
    }

    getRound(id: any)
    {
        this.loadRounds();
        return this.rounds.find(b => b._id == id)!;
    }

    getBulkWritePlayerByTournamentId(tournamentId: number) {
        this.loadBulkWriteRounds();
        return this.bulkWriteRounds.find(b => b.tournamentId == tournamentId)!;
    }

    bulkWriteRound(bulkWriteRounds: BulkWriteRounds): void {        
        this.dataSource.bulkWriteRegisteredRounds(bulkWriteRounds).subscribe(b => {
            this.refresh();
            this.tournamentRepo.refresh();
        });
    }
}