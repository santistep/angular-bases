import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

console.log(uuid());

// Decorador que le dice a Angular que lo trate como servicio
@Injectable({
  // Propiedad que transforma en singleton
  // la data en toda la applicacion
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilling',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public addNewCharacter(character: Character): void {
    // Forma corta de crear el character
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);

    // Forma larga de crear el character
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // };
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
