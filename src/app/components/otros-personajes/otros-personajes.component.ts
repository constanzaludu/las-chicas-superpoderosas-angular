import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-otros-personajes',
  templateUrl: './otros-personajes.component.html',
  styleUrls: ['./otros-personajes.component.scss']
})
export class OtrosPersonajesComponent implements OnInit {
  
  secondary : string[] = [];
  characters: any[] = [];

  constructor(private charactersService : CharactersService) { }

  ngOnInit(): void {
  
  this.characters = this.charactersService.createCharacter();
  this.characters.map(element => {
    this.secondary = element.secondary
  });
  
  
  }



}
