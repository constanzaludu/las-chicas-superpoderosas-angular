import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burbuja',
  templateUrl: './burbuja.component.html',
  styleUrls: ['./burbuja.component.scss']
})
export class BurbujaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("estoy en burbuja")
  }

}
