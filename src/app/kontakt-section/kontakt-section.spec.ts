import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktSection } from './kontakt-section';

describe('KontaktSection', () => {
  let component: KontaktSection;
  let fixture: ComponentFixture<KontaktSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontaktSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaktSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
