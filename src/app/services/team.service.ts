import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeams()
  {
    return [
      { 'name':"Walter White", 'pic':"team-1.jpg", 'designation':"Chief Executive Officer", 'intro':"Hi! all of you.", 'social_link':{
        "twit":"#", 
        'fb':"#",  
        'inst':"#", 
        "in":"#"}
      },
      { 'name':"Sarah Jhonson", 'pic':"team-2.jpg", 'designation':"Product Manager", 'intro':"Aut maiores voluptates amet et quis", 'social_link':{
        "twit":"#", 
        'fb':"#",  
        'inst':"#", 
        "in":"#"}
      },
      { 'name':"Uday K Pandey", 'pic':"uk_pic.jpg", 'designation':"CTO", 'intro':"Hi! this is uday", 'social_link':{
        "twit":"udaydeveloper", 
        'fb':"udaydeveloper",  
        'inst':"udaydeveloper", 
        "in":"udaydeveloper"}
      },
      { 'name':"S N Gupta", 'pic':"team-3.jpg", 'designation':"Accountant", 'intro':"Hi! this shyam", 'social_link':{
        "twit":"sn", 
        'fb':"sn",  
        'inst':"sn", 
        "in":"sn"}
      },
    ];
  }
}
