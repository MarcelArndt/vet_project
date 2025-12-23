import { Component } from '@angular/core';
import { IconComponent } from '../../components/icons/icons';

@Component({
  selector: 'app-contact-form',
  imports: [IconComponent],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

  checkBoxState:boolean = false;

  toggleCheckBoxState(){
   this.checkBoxState = !this.checkBoxState; 
  }

  get ischeckBoxState():boolean{
    return this.checkBoxState 
  }

}
