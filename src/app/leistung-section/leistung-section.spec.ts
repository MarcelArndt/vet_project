import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungSection } from './leistung-section';

describe('LeistungSection', () => {
  let component: LeistungSection;
  let fixture: ComponentFixture<LeistungSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeistungSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeistungSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
