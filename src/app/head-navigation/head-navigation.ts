import { Component } from '@angular/core';
import { MenuButtonComponent } from '../components/menu-button-component/menu-button-component';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../components/icons/icons';

@Component({
  selector: 'app-head-navigation',
  imports: [MenuButtonComponent, RouterLink, IconComponent],
  templateUrl: './head-navigation.html',
  styleUrl: './head-navigation.scss',
})
export class HeadNavigation {

}
