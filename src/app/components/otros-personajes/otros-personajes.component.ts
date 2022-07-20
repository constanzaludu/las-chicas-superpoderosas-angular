import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-otros-personajes',
  templateUrl: './otros-personajes.component.html',
  styleUrls: ['./otros-personajes.component.scss']
})
export class OtrosPersonajesComponent implements OnInit {
  
  secondaryCharacters : Character[] = [];
  characters: any[] = [];

  constructor(private charactersService : CharactersService) { }

  ngOnInit(): void {
  
  this.characters = this.charactersService.getCharacter();
  this.characters.map(element => {
    this.secondaryCharacters = element.secondary
  });
  
  
  }



}
