import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSection } from './extra-section';

describe('ExtraSection', () => {
  let component: ExtraSection;
  let fixture: ComponentFixture<ExtraSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
