import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CharactersService } from 'src/app/services/characters.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-burbuja',
  templateUrl: './burbuja.component.html',
  styleUrls: ['./burbuja.component.scss']
})
export class BurbujaComponent implements OnInit {

  burbuja : Character = new Character;
  characters : any[] = [];

  constructor(private charactersService: CharactersService, public navigation: NavigationService) { }

  ngOnInit(): void {
  
    this.characters = this.charactersService.getCharacter();
    this.characters.map(element =>{
      for (let index = 0; index < element.main.length; index++) {
        const chicaSuperpoderosa = element.main[index];
        if (chicaSuperpoderosa.name == "Burbuja"){
          this.burbuja.name = chicaSuperpoderosa.name;
          this.burbuja.description = chicaSuperpoderosa.description;
          this.burbuja.img = chicaSuperpoderosa.img
        }
      }
    })


  }

}
