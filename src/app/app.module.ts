import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurbujaComponent } from './components/burbuja/burbuja.component';
import { BombonComponent } from './components/bombon/bombon.component';
import { BellotaComponent } from './components/bellota/bellota.component';
import { OtrosPersonajesComponent } from './components/otros-personajes/otros-personajes.component';
import { GaleriaDeFotosComponent } from './components/galeria-de-fotos/galeria-de-fotos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BurbujaComponent,
    BombonComponent,
    BellotaComponent,
    OtrosPersonajesComponent,
    GaleriaDeFotosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
