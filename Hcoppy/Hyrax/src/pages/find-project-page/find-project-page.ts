import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Projects } from '../../providers/projects';

@Component({
  selector: 'page-find-project-page',
  templateUrl: 'find-project-page.html'
})
export class FindProjectPage {

	projects: any;

  constructor(public viewCtrl: ViewController,public projectService: Projects) {

  }

  ionViewDidLoad(){
    this.projectService.getProjects().then((data) => {
      console.log('Hello',data);
      this.projects = data;
    });
  }

}
