import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnComponent, IconComponent], // Importa los componentes independientes aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrige el nombre de la propiedad
})
export class AppComponent {
  title = 'angularProject';
}
