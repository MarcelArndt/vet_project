import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSideMenu } from './fixed-side-menu';

describe('FixedSideMenu', () => {
  let component: FixedSideMenu;
  let fixture: ComponentFixture<FixedSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedSideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
