import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Projects {
 
  data: any;
 
  constructor(private http: Http) {
    this.data = null;
  }
 
  getProjects(){
 
    // if (this.data) {
    //   console.log('FIRST PART');
    //   console.log('data: ' + this.data);
    //   return Promise.resolve(this.data);
    // }
    //console.log('SEcond PART');
    //console.log('data: ' + this.data);
    return new Promise(resolve => {
 
      this.http.get('https://XXXXXXXXXXXXXXXXXX.herokuapp.com/api/projects')
      //this.http.get('http://localhost:8080/api/projects')
        .map(res => res.json())
        .subscribe(data => {
          // this.data = data;
          // resolve(this.data);
          resolve(data);
        });
    });
 
  }

  //   getProjects(){

  //   return new Promise(resolve => {
 
  //     this.http.get('http://localhost:8080/api/projects')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
 
  // }

 
  createProject(project){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post(
      'https://XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.herokuapp.com/api/projects',
      //'http://localhost:8080/api/projects',
       JSON.stringify(project),
        {headers: headers})
        .subscribe(res => {
        //   Promise.resolve (res);
        // }, (err) => {
        //   Promise.reject(err);
          console.log(res.json());
        });
    // .map(res => res.json())
    //.catch(this.handleError);
  }

  // createProject(project){

  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   this.http.post('http://localhost:8080/api/projects', 
  //       JSON.stringify(project),
  //       {headers: headers}
  //     )
  //     // .subscribe(res => {
  //     //   console.log(res.json());
  //     //   console.log('blegh I dont Know what this dose');
  //     // });
 
  // }


 
  deleteProject(id){
 
    this.http.delete('https://XXXX.herokuapp.com/api/projects/' + id).subscribe((res) => {
    //this.http.delete('http://localhost:8080/api/projects/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
}
