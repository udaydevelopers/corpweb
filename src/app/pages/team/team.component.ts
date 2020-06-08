import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  public teams = [];
  constructor(private _teamService:TeamService) { }

  ngOnInit() {
    this.teams = this._teamService.getTeams();
  }

}
