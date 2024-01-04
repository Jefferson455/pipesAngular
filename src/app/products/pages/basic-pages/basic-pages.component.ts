import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})

export class BasicPagesComponent {
  public nameLower: string = 'JEFFERSON'
  public nameUpper: string = 'JEfFerSon'
  public nameTittle: string = 'JeffersON'
}
