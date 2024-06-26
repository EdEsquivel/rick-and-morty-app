import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { LocationsComponent } from './components/locations/locations.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { path: '', component: MenuComponent }, // Ruta para el menú principal
  { path: 'characters', component: CharactersComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir a menú principal en caso de ruta no válida
];