import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlideComponent  implements OnInit {

  @Input() slides: any[] = [];
  swiperModules = [IonicSlides]
  
  constructor() { }

  ngOnInit():void {
    this.slides = [
      {
        title : 'Tarea 1',
        imageUrl: 'http://github.com/AlexisSM377.png',
        porcentage: 20,
      },
      {
        title : 'Tarea 2',
        imageUrl: 'assets/images/img.jpg',
        porcentage: 30,
      },
      {
        title : 'Tarea 3',
        imageUrl: 'http://github.com/AlexisSM377.png',
        porcentage: 40,
      },
      {
        title : 'Tarea 4',
        imageUrl: 'assets/images/img.jpg',
        porcentage: 40,
      }
    ]
  }
  getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

}
