import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive: boolean = false;

    changeColor(){
      if(this.isActive == false) {
        this.isActive = true;
      }
      else if(this.isActive == true){
        this.isActive = false;
      }
    }
}

