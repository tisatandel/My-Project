import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsMeatFish } from './eggs-meat-fish';

describe('EggsMeatFish', () => {
  let component: EggsMeatFish;
  let fixture: ComponentFixture<EggsMeatFish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EggsMeatFish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggsMeatFish);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
