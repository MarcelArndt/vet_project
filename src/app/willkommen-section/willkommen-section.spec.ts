import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillkommenSection } from './willkommen-section';

describe('WillkommenSection', () => {
  let component: WillkommenSection;
  let fixture: ComponentFixture<WillkommenSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WillkommenSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WillkommenSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
