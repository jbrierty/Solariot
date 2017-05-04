import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Projects } from '../../providers/projects';
 
@Component({
  selector: 'add-project-page',
  templateUrl: 'add-project-page.html'
})
export class AddProjectPage {
 
  address: any;
  description: any;
  phone: any;
  energyrate: any;
 
  constructor(public viewCtrl: ViewController,public projectService: Projects) {
 
  }
 
  ionViewDidLoad(){

  }

  save(): void {
 
    let project = {
      address: this.address,
      description: this.description,
      phone: this.phone,
      energyrate: this.energyrate
    };

    this.projectService.createProject(project);
 
    this.viewCtrl.dismiss();
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}
