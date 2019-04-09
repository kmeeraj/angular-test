import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  protected value = 'real value';
  constructor() { }

  getValue() { return this.value; }
  setValue(value: string) { this.value = value; }

}
