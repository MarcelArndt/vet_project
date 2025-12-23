import { Component } from '@angular/core';
import { IconComponent } from '../components/icons/icons';

@Component({
  selector: 'app-map-section',
  imports: [IconComponent],
  templateUrl: './map-section.component.html',
  styleUrl: './map-section.component.scss'
})
export class MapSectionComponent {

  checkBoxState:boolean=false;

  ngOnInit(){
    this.loadStorage()
  }

  loadStorage(){
    const acception = localStorage.getItem('acceptGooglTeermsOfUse');
    if(acception == 'true'){
      this.checkBoxState = true;
    } else {
      localStorage.setItem('acceptGooglTeermsOfUse', 'false');
    }
  }

  toggleCheckBoxState(){
   this.checkBoxState = !this.checkBoxState; 
    if(this.checkBoxState){
      localStorage.setItem('acceptGooglTeermsOfUse', 'true');
    }
  }

  get ischeckBoxState():boolean{
    return this.checkBoxState 
  }

}
