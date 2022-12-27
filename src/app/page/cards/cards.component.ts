import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  count = 0;

  Increment(){
      this.count++  
  }

  Decrement(){
    this.count--
  }
}
