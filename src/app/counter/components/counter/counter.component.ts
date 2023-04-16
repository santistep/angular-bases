import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Contador: {{ contador }}</h2>
    <button (click)="increaseOrDecreaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseOrDecreaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public contador: number = 10;

  increaseOrDecreaseBy(value: number): void {
    this.contador += value;
  }

  resetCounter() {
    this.contador = 10;
  }
}
