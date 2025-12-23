import { Component } from '@angular/core';
import { ImageSliderComponent } from '../components/image-slider-component/image-slider-component';
import { IconComponent  } from '../components/icons/icons';


@Component({
  selector: 'app-hero-section',
  imports: [ImageSliderComponent, IconComponent ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {

  imageSliderUrlArray:string[]=[
    './assets/hero/images/gal07.jpg',
    './assets/hero/images/gal10.jpg',
    './assets/hero/images/gal23.jpg',
    './assets/hero/images/gal38.jpg',
    './assets/hero/images/gal44.jpg',
  ]

}
