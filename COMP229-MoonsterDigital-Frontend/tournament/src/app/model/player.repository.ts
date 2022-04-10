/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date April 06th 2022
 * @CourseName Web Application Development SEC005
 */

import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { RestDataSource } from './rest.datasource';
import { BulkWritePlayers } from './bulkwriteplayers.model';

@Injectable()
export class PlayerRepo {
    private players: Player[] = [];
    private bulkWritePlayers: BulkWritePlayers[] = [];

    constructor(private dataSource: RestDataSource) {
        this.refresh();
    }

    refresh(): void{
        this.dataSource.getRegisteredPlayers().subscribe(data => {
            this.players = data;
        });
        this.dataSource.getBulkWritePlayers().subscribe(data => {
            this.bulkWritePlayers = data;
        });
    }

    getPlayers() {
        return this.players;
    }

    getPlayersByTournamentId(tournamentId: any){
        return this.players.filter(a => a.tournamentId === tournamentId);
    }

    getPlayer(id: any)
    {
        return this.players.find(b => b._id == id)!;
    }

    getBulkWritePlayerByTournamentId(tournamentId: number) {
        return this.bulkWritePlayers.find(b => b.tournamentId == tournamentId)!;
    }

    bulkWritePlayer(bulkWritePlayers: BulkWritePlayers): void {        
        this.dataSource.bulkWriteRegisteredPlayers(bulkWritePlayers).subscribe(b => {
            this.refresh();
        });
    }

}