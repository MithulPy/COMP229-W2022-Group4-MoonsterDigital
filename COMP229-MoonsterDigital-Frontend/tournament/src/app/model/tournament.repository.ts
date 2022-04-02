import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { StaticDataSource } from './static.datasource';
import { User } from './user.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TournamentRepo {
    private tournaments: Tournament[] = [];
    private player: String[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getTournaments().subscribe(data => {
            this.tournaments = data;
            this.player = this.getPlayerData(data);
        });
    }

    // not in use
    getTournaments(player: String | null): Tournament[] {
        return this.tournaments
            .filter(b => player == null || player === b.players);
    }

    getTournament(id: any): Tournament {
        return this.tournaments.find(b => b._id == id)!;
    }

    getAllTournaments(){
        return this.tournaments;
    }

    getActiveTournaments() {
        return this.tournaments.filter(a => a.isActive === true);
    }

    // below two player functions may be duplicated
    getPlayerData(data: any[]) {
        data.map(b => b.players)
            .filter((a, index, array) => array.indexOf(a) === index).sort()
        return data;
    }

    getPlayers(): String[] {
        return this.player;
    }

    saveTournament(savedTournament: Tournament): void {
        if (savedTournament._id === null || savedTournament._id === 0 || savedTournament._id === undefined) {
            this.dataSource.addTournaments(savedTournament).subscribe(b => {
                this.tournaments.push(savedTournament);
            });
        }
        else {
            this.dataSource.editTournament(savedTournament).subscribe(tournament => {
                this.tournaments.splice(this.tournaments.findIndex(b => b._id === savedTournament._id), 1, savedTournament);
            });
        }
    }

    modifyTournament(savedTournament: Tournament, id: any): void {
        if (savedTournament._id === null || savedTournament._id === 0) {
            this.dataSource.addTournaments(savedTournament).subscribe(b => {
                this.tournaments.push(savedTournament);
            });
        }
        else {
            this.dataSource.editTournament(savedTournament).subscribe(tournament => {
                this.tournaments.splice(this.tournaments.findIndex(b => b._id === savedTournament._id), 1, savedTournament);
            });
        }
    }

    createTournament(data: any) {
        this.tournaments.push(data);
    }

    deleteTournament(deletedTourID: number): void {

        this.dataSource.deleteTournament(deletedTourID).subscribe(tournament => {
            this.tournaments.splice(this.tournaments.findIndex(b => b._id === deletedTourID), 1);
        });
    }
    
    updateTournament(data: any, id: number) {
        this.tournaments.find(b => b._id === id)!.title = data.title;
        this.tournaments.find(b => b._id === id)!.players = data.players;
        this.tournaments.find(b => b._id === id)!.startDate = data.startDate;
    }

    get authenticated(): boolean
    {
      return this.dataSource.loggedIn();
    }
}
