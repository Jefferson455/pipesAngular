import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  by: string = 'Jefferson'
  public isUpperCase: boolean = false;
  //---Start Data---//
  public heroes: Hero[] = [
    {
      name: 'Flash',
      canFly: false,
      color: Color.black
    },
    {
      name: 'SuperMan',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    }
  ]
  //---end---//


  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
