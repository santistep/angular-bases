import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 30;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    let restOfName: string = this.name.slice(1);
    return `${this.name.charAt(0).toUpperCase() + restOfName} - ${this.age}`;
  }

  changeHero(value: string): void {
    this.name = value;
  }

  changeAge(value: number): void {
    this.age = value;
  }
}
