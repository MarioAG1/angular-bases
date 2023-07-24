import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Para comunicar por el main
  @Output()
  public onNew: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    //Enviar el nuevo personaje

    this.onNew.emit({ ... this.character });
    // Si ponemos este a la hora de ejecutar se sobreescribe la limpieza de valores y lo ejecuta pero a la hora de pasar la informaciones se queda limpia
    // this.onNewCharacter.emit(this.character)


    //Para limpiar los valores
    this.character.name = "";
    this.character.power = 0;
  }
}
