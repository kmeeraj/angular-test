import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ValueService {

  protected value = 'real value';
  constructor() { }

  getValue() { return this.value; }
  setValue(value: string) { this.value = value; }

  getObservableValue(): Observable<string> {
    return  new Observable(observer => {
      observer.next('observable value');
    });
  }

  getPromiseValue() { return Promise.resolve('promise value'); }
}
