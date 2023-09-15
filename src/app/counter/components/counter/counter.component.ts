import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public title: string = 'Hola mundo';
  public number: number = 0;
  public counter: number = 10;

  reset(): void {
    this.counter = 10;
  }

  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }
}
