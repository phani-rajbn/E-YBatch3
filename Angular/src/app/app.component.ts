import { Component } from '@angular/core';

@Component({
  selector: 'firstone',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-app';
  trainer = "Phaniraj B.N."
  //functions in Component are created as event handlers or functions to manipulate the data of the Component(add, rmove, update.....)
  clickOnMe(){
    this.trainer = "Gopal"
    alert("I was clicked")
  }
}
