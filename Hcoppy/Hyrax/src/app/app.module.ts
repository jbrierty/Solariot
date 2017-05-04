import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddProjectPage } from '../pages/add-project-page/add-project-page';
import { FindProjectPage } from '../pages/find-project-page/find-project-page';
import { Projects } from '../providers/projects';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddProjectPage,
    FindProjectPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddProjectPage,
    FindProjectPage
  ],
  providers: [Projects]
})
export class AppModule {}
