import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisSection } from './praxis-section';

describe('PraxisSection', () => {
  let component: PraxisSection;
  let fixture: ComponentFixture<PraxisSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraxisSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraxisSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
