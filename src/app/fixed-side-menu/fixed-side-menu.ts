import { Component } from '@angular/core';
import { MenuButtonComponentService } from '../components/menu-button-component/menu-button-component.service';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from '../components/menu-button-component/menu-button-component';
import { IconComponent } from '../components/icons/icons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-fixed-side-menu',
  imports: [CommonModule, MenuButtonComponent, IconComponent, RouterLink],
  templateUrl: './fixed-side-menu.html',
  styleUrl: './fixed-side-menu.scss',
})
export class FixedSideMenu {
  constructor(private menuService:MenuButtonComponentService){}

  get menuState():boolean{
    return this.menuService.isMenuOpen()
  }

  preventClick(event:Event){
    event.stopPropagation();
  }

  closeNavigation(){
    console.log('test')
    this.menuService.close();
  }
}
