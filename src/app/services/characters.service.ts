import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import jsonFile from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters : any[] = [];

  constructor() { }


  getCharacter = () : Character[] => {

    for (let index = 0; index < jsonFile.length; index++) {
      const element = jsonFile[index];
      this.characters.push(element);
    }
    return this.characters;
  }


}
