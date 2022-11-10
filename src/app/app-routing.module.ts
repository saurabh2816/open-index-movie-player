import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaveMoviesComponent } from './save-movies/save-movies.component';
import { CustomVideoComponent } from './custom-video/custom-video.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play', component: CustomVideoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'saveAllMoviesFromALink', component: SaveMoviesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


