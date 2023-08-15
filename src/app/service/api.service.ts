
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 /* private baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  createTeams(players: Player[], playersPerTeam: number): Observable<Team[]> {
    return this.http.post<Team[]>(`${this.baseUrl}/create-teams`, { players, playersPerTeam });
  }*/
}
