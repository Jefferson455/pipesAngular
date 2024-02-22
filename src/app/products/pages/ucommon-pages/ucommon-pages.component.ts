import { Component } from '@angular/core';
import { Observable, interval, tap } from "rxjs";

@Component({
  selector: 'app-ucommon-pages',
  templateUrl: './ucommon-pages.component.html',
  styleUrl: './ucommon-pages.component.css'
})
export class UcommonPagesComponent {

  //i18nSelect
  public name: string = 'Jefferson';
  public gender: 'male' | 'female' | 'No existe' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  changeclient(): void {
    this.name = (this.name === 'Jefferson') ? 'Melissa' : 'Jefferson';
    this.gender = (this.gender === 'male') ? 'female' : 'male';
  }


  // i18nPLural

  public clients: string[] = ['Sofia', 'Jefferson', 'Leidy', 'Celedonio', 'Monica', 'Johan', 'Eduardo', 'Jose', 'Carolina', 'Oscar'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Jefferson',
    age: 23,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    //tap(value => console.log('tap: ', value))
  );

  public promiseValue: Promise<String> = new Promise((resolve, reject) => {
    /* setTimeout(() => {
      resolve('Tenemos datos en la promesa');
    }, 3500); */
  })
}
