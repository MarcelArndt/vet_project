import { Component } from '@angular/core';
import { HeaderArticleSection } from '../header-article/header-article';
import { ArticleSection } from '../article-section/article-section';

@Component({
  selector: 'app-article-page',
  imports: [HeaderArticleSection, ArticleSection],
  templateUrl: './article-page.html',
  styleUrl: './article-page.scss',
})
export class ArticlePage {

}
