import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningHousehold } from './cleaning-household';

describe('CleaningHousehold', () => {
  let component: CleaningHousehold;
  let fixture: ComponentFixture<CleaningHousehold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleaningHousehold]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleaningHousehold);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
