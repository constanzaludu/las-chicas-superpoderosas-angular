import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BellotaComponent } from './components/personajes/bellota/bellota.component';
import { BombonComponent } from './components/personajes/bombon/bombon.component';
import { BurbujaComponent } from './components/personajes/burbuja/burbuja.component';
import { HomeComponent } from './components/home/home.component';
import { OtrosPersonajesComponent } from './components/otros-personajes/otros-personajes.component';
import { GaleriaDeFotosComponent } from './components/galeria-de-fotos/galeria-de-fotos.component';

const routes: Routes = [

  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "burbuja", component: BurbujaComponent, pathMatch:"full"},
  { path: "bombon", component: BombonComponent, pathMatch:"full"},
  { path: "bellota", component: BellotaComponent, pathMatch:"full"},
  { path: "otros-personajes", component: OtrosPersonajesComponent, pathMatch:"full"},
  { path: "galeria-de-fotos", component: GaleriaDeFotosComponent, pathMatch:"full"},
  { path: "**", component: HomeComponent} //AGREGAR ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
