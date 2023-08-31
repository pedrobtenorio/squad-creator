import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Player {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})

export class PlayerFormComponent {
  playerForm: FormGroup;
  players: Player[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  addPlayer() {
    if (this.playerForm.valid) {
      const player: Player = this.playerForm.value;
      this.players.push(player);
      this.playerForm.reset();
    }
  }

  onSubmit() {
    console.log(this.players)
    if (this.players.length > 0) {
      const playersPerTeamValue = 2; //isso poderia ser adicionado ao form
      console.log(this.players)
     /* this.apiService.createTeams(this.players, playersPerTeamValue).subscribe(
        teams => {
          console.log('Teams created:', teams);
        },
        error => {
          // Handle error
          console.error('Error creating teams:', error);
        }
      );*/
    }
  }
}
