import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public createCharacter: Character = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    if (this.createCharacter.name.length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.createCharacter);

    this.createCharacter = { name: '', power: 0 };
  }
}
