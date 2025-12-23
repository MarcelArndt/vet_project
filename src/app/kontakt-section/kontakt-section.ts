import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { IconComponent } from '../components/icons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kontakt-section',
  imports: [ContactForm, IconComponent, RouterLink ],
  templateUrl: './kontakt-section.html',
  styleUrl: './kontakt-section.scss',
})
export class KontaktSection {


}
