import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyHygiene } from './beauty-hygiene';

describe('BeautyHygiene', () => {
  let component: BeautyHygiene;
  let fixture: ComponentFixture<BeautyHygiene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyHygiene]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyHygiene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
