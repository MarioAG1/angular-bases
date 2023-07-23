import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]
  //Este es el valor por defecto

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(id:number): void {
    this.onDeleteCharacter.emit(id);
  }



}
