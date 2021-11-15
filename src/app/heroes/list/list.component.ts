import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spider Man', 'Iron Man', 'Hulk', 'Thor', 'Captain America'];
  removedHero: string = '';

  removeHero(): void {
    this.removedHero = this.heroes.pop() || '';
    console.log(this.removedHero);
  }
}