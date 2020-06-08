import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private _teamSevice:TeamService) { }

  public teams = [];

  public skills = [
    {'name':"PHP", "level":"100"},
    {'name':"Laravel", "level":"90"},
    {'name':"Codeigniter", "level":"90"},
    {'name':"Wordpress", "level":"70"},
    {'name':"Python", "level":"60"},
    {'name':"Django", "level":"70"},
    {'name':"Angular", "level":"70"},
    {'name':"ReactJS", "level":"60"},
    {'name':"bootstarp", "level":"90"},
    {'name':"API Programming", "level":"90"},
    {'name':"Rest API", "level":"90"},
    {'name':"Google API", "level":"90"},
  ];

  ngOnInit() {
    this.teams = this._teamSevice.getTeams();
  }

}
