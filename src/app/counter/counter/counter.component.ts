import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})
export class CounterComponent {
    title: string = 'Contador App';
    counter: number = 0;
    base: number = 5;
  
    decrementCounter(): void {
      this.counter -= 1;
    }
    incrementCounter(): void {
      this.counter += 1;
    }
    acumulate(value: number): void {
      this.counter += value;
    }
}