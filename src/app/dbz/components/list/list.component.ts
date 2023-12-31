import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-character',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCharacterComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]
  //Este es el valor por defecto

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?: string): void {
    if (!id) return
    this.onDelete.emit(id);
  }
}
