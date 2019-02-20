import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  public now: Date = new Date();
  public clicked = false;
  public numbers;

   constructor() { 
     this.numbers = Array(0);
   }

  formatDoc(){
      this.clicked = true;
      this.numbers.push(1);
  }

  leftAlign(){
    
  }

  rightAlign(){

  }


}
