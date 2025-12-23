import { Component, HostListener,QueryList, ViewChildren  } from '@angular/core';
import { AccordionComponent } from '../components/accordion-component/accordion-component';

@Component({
  selector: 'app-leistung-section',
  imports: [AccordionComponent],
  templateUrl: './leistung-section.html',
  styleUrl: './leistung-section.scss',
})
export class LeistungSection {
  @ViewChildren('accordionElement')accordionElements!:QueryList<AccordionComponent>;

  //1293px sind 3 spalten verfügbar -> alle Tabs sollen geöffnet werden

  @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
      this.innerWidth = (event.target as Window).innerWidth;
      this.checkforCurrentState();
  }

  innerWidth = window.innerWidth;

  ngAfterViewInit(){
    this.checkforCurrentState();
  }

  checkforCurrentState(){
    if(!this.accordionElements) return;

      if(this.innerWidth >= 1293){
        this.accordionElements.forEach((signleAccordionElement) => {
            signleAccordionElement.open()
            signleAccordionElement.setMenuActiveOff()
        });
      } 
      
      if(this.innerWidth < 1293){
        this.accordionElements.forEach((signleAccordionElement) => {
            signleAccordionElement.setMenuActiveOn()
        }); 
      } 

      if(this.innerWidth <= 853){
        this.accordionElements.forEach((signleAccordionElement) => {
            signleAccordionElement.close()
        }); 
      }
  }

}
