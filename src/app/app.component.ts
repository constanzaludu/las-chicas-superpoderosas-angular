import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'las-chicas-superpoderosas-angular';
  
  constructor(public navigation:NavigationService){
    this.navigation.startSaveHistory();
  }
}
