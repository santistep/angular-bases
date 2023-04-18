import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './dbz.component.html',
})
export class DbzMainComponent {
  // Inyeccion de dependencias en Angular
  // se hace con el constructor
  constructor(private DbzService: DbzService) {}

  // MANEJO DE LA DATA DEL SERVICIO ( private )

  get characters(): Character[] {
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.DbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.DbzService.addNewCharacter(character);
  }
}
