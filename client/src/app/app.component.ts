import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public router: Router){}

  goToAnimal(){
    this.router.navigate(['/animal']);
  }

  goToZoo(){
    this.router.navigate(['/zoo']);
  }

  //animal
  //zoo
  //refer to app-routing.module path: 'xx'
}
