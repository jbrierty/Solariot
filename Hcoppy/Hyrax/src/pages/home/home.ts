import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { AddProjectPage } from '../add-project-page/add-project-page';
import { FindProjectPage } from '../find-project-page/find-project-page';
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public nav: NavController) {
  }

  addProject(){
 
    this.nav.push(AddProjectPage);
 
  }
  getProjects(){

  	this.nav.push(FindProjectPage);
  }

}