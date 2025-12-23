import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainWrapper } from './components/main-wrapper/main-wrapper';
import { StickyHeaderComponent } from './components/sticky-header-component/sticky-header-component';
import { HeadNavigation } from './head-navigation/head-navigation';
import { FixedSideMenu } from './fixed-side-menu/fixed-side-menu';
import { Footer } from "./footer/footer";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainWrapper, StickyHeaderComponent, HeadNavigation, FixedSideMenu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('krueger-tierarztpraxis');
  constructor(private meta:Meta){
    this.meta.updateTag({
      name: 'description',
      content: 'Tierarztpraxis Krüger für Hunde, Katzen und Kleintiere aus Bad Salzuflen. Moderne Diagnostik, Vorsorge und einfühlsame Behandlung.'
    });
  } 

}
