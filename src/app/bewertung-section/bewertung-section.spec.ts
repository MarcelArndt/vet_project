import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewertungSection } from './bewertung-section';

describe('BewertungSection', () => {
  let component: BewertungSection;
  let fixture: ComponentFixture<BewertungSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BewertungSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BewertungSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
