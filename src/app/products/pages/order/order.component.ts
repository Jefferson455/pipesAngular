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
  public orderBy?: keyof Hero;
  public order: boolean = true;
  //---Start Data---//
  public heroes: Hero[] = [
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'SuperMan',
      canFly: false,
      color: Color.blue
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
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    }
  ]
  //---end---//


  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy === value ? this.order = !this.order : (this.orderBy = value, this.order = true);
  }
}
