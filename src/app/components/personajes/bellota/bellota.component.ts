import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CharactersService } from 'src/app/services/characters.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bellota',
  templateUrl: './bellota.component.html',
  styleUrls: ['./bellota.component.scss']
})
export class BellotaComponent implements OnInit {


  bellota: Character = new Character;
  characters: any[] = [];

  constructor(private charactersService: CharactersService, public navigation: NavigationService) { }

  ngOnInit(): void {

    this.characters = this.charactersService.getCharacter();
    this.characters.map(element => {
    for (let index = 0; index < element.main.length; index++) {
      const chicaSuperpoderosa = element.main[index];
      if (chicaSuperpoderosa.name == "Bellota"){
        this.bellota.name = chicaSuperpoderosa.name;
        this.bellota.description = chicaSuperpoderosa.description;
        this.bellota.img = chicaSuperpoderosa.img;
      }
      
    }
    });
    console.log(this.bellota)


  }

}
