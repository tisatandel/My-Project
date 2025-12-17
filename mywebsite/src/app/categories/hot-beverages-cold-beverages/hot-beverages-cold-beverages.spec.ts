import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotBeveragesColdBeverages } from './hot-beverages-cold-beverages';

describe('HotBeveragesColdBeverages', () => {
  let component: HotBeveragesColdBeverages;
  let fixture: ComponentFixture<HotBeveragesColdBeverages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotBeveragesColdBeverages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotBeveragesColdBeverages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
