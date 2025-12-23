import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArticleSection } from './header-article';

describe('HeroSection', () => {
  let component: HeaderArticleSection;
  let fixture: ComponentFixture<HeaderArticleSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderArticleSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderArticleSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
