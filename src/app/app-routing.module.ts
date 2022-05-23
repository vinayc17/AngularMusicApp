import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GenreComponent } from './genre/genre.component';
import { ArtistComponent } from './artist/artist.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'favorites',component:FavoritesComponent},
  {path:'genre',component:GenreComponent},
  {path:'artist',component:ArtistComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}