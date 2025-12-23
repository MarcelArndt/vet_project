import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { WillkommenSection } from '../willkommen-section/willkommen-section';
import { InfoSection } from '../info-section/info-section';
import { PraxisSection } from '../praxis-section/praxis-section';
import { ExtraSection } from '../extra-section/extra-section';
import { UeberUnsSection } from '../ueber-uns-section/ueber-uns-section';
import { LeistungSection } from '../leistung-section/leistung-section';
import { MapSectionComponent } from '../map-section/map-section.component';
import { KontaktSection } from '../kontakt-section/kontakt-section';

@Component({
  selector: 'app-main-page',
  imports: [HeroSection, WillkommenSection, InfoSection, PraxisSection, ExtraSection, UeberUnsSection, LeistungSection, MapSectionComponent, KontaktSection],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
