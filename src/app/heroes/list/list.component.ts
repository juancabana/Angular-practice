import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  public heroRemoved?: string | undefined = undefined;

  removeLastHero(): void {
    const hero = this.heroNames.pop();
    this.heroRemoved = hero;
  }

  resetHeroes(): void {
    this.heroNames = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
    this.heroRemoved = undefined;
  }
}
