import { Component } from '@angular/core';
import { CarouselSliderComponent } from '../components/carousel-slider-component/carousel-slider-component';
import { CardComponent } from '../components/card-component/card-component';
import { RatingStarsComponent } from '../components/rating-stars-component/rating-stars-component';

@Component({
  selector: 'app-bewertung-section',
  imports: [CarouselSliderComponent, CardComponent, RatingStarsComponent],
  templateUrl: './bewertung-section.html',
  styleUrl: './bewertung-section.scss',
})
export class BewertungSection {

}
