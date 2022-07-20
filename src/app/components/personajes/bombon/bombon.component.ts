import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CharactersService } from 'src/app/services/characters.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bombon',
  templateUrl: './bombon.component.html',
  styleUrls: ['./bombon.component.scss']
})
export class BombonComponent implements OnInit {

  bombon : Character = new Character;
  characters: any[] = [];


  constructor(private charactersService: CharactersService, public navigation: NavigationService) { }

  ngOnInit(): void {

    this.characters = this.charactersService.getCharacter();
    this.characters.map(element => {
      for (let index = 0; index < element.main.length; index++) {
        const chicaSuperpoderosa = element.main[index];
        if( chicaSuperpoderosa.name == "Bombón"){
          this.bombon.name = chicaSuperpoderosa.name;
          this.bombon.description = chicaSuperpoderosa.description;
          this.bombon.img = chicaSuperpoderosa.img;
        }
      }
    })
  }

}
