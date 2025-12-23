import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNavigation } from './head-navigation';

describe('HeadNavigation', () => {
  let component: HeadNavigation;
  let fixture: ComponentFixture<HeadNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
