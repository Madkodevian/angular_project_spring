import { Routes } from '@angular/router';
import { PhotoshootListComponent } from './photoshoot-list/photoshoot-list.component';
export const routes: Routes = [
    {path: '', redirectTo: 'photoshoot', pathMatch: 'full'},
    {path: 'photoshoot', component: PhotoshootListComponent}
];
