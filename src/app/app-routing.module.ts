import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BellotaComponent } from './components/bellota/bellota.component';
import { BombonComponent } from './components/bombon/bombon.component';
import { BurbujaComponent } from './components/burbuja/burbuja.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "burbuja", component: BurbujaComponent, pathMatch:"full"},
  { path: "bombon", component: BombonComponent, pathMatch:"full"},
  { path: "bellota", component: BellotaComponent, pathMatch:"full"},
  { path: "**", component: HomeComponent} //AGREGAR ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
