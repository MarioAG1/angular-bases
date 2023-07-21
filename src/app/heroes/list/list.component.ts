import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Ironman", "Hulk"]
  public deletedHero?: string = "";

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
  refreshHeroes(): void {
    this.heroNames = ["Spiderman", "Ironman", "Hulk"];
  }
}
