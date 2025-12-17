import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryCakesDairy } from './bakery-cakes-dairy';

describe('BakeryCakesDairy', () => {
  let component: BakeryCakesDairy;
  let fixture: ComponentFixture<BakeryCakesDairy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryCakesDairy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryCakesDairy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
