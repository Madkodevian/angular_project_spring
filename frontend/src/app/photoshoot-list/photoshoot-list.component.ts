import { Component, OnInit } from '@angular/core';
import { Photoshoot } from '../models/photoshoot';
import { PhotoshootService} from '../services/photoshoot.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-photoshoot-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photoshoot-list.component.html',
  styleUrl: './photoshoot-list.component.scss'
})
export class PhotoshootListComponent implements OnInit{
  
  photoshoot?: Photoshoot[];
  
  constructor(private photoshootService: PhotoshootService){}
  
  ngOnInit(): void {
    this.fetchPhotoshoot();
  }

  private fetchPhotoshoot() {
    this.photoshootService.findAll().subscribe({
      next: value => {
        this.photoshoot = value
        console.log(value)
      },
      error: error => {console.log(error)}

    })
  }

}
