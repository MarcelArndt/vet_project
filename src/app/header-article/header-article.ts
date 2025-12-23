import { Component } from '@angular/core';
import { ImageSliderComponent } from '../components/image-slider-component/image-slider-component';;


@Component({
  selector: 'app-header-article-section',
  imports: [ImageSliderComponent],
  templateUrl: './header-article.html',
  styleUrl: './header-article.scss',
})
export class HeaderArticleSection {

  imageSliderUrlArray:string[]=[
    './assets/article/images/guinepig001.jpg',
    './assets/article/images/rabbit001.jpg',
    './assets/article/images/guinepig002.jpg',
    './assets/article/images/rabbit002.jpg',
    './assets/article/images/rabbit003.jpg',
  ]

}
