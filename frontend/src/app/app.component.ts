import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';
import { CommonModule } from '@angular/common';
import { PhotoshootListComponent } from './photoshoot-list/photoshoot-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnComponent, IconComponent, PhotoshootListComponent, CommonModule, HttpClient], // Importa los componentes independientes aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrige el nombre de la propiedad
})
export class AppComponent {
  title = 'angularProject';
}
