import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberUnsSection } from './ueber-uns-section';

describe('UeberUnsSection', () => {
  let component: UeberUnsSection;
  let fixture: ComponentFixture<UeberUnsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UeberUnsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeberUnsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
