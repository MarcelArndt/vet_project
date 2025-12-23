import { Routes } from '@angular/router';
import { MainWrapper } from './components/main-wrapper/main-wrapper';
import { MainPage } from './main-page/main-page';
import { ArticlePage } from './article-page/article-page';
export const routes: Routes = [
 {path:'', component: MainPage},
{path:'article', component: ArticlePage}
];
