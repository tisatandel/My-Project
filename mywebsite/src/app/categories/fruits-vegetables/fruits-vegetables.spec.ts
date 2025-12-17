import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsVegetables } from './fruits-vegetables';

describe('FruitsVegetables', () => {
  let component: FruitsVegetables;
  let fixture: ComponentFixture<FruitsVegetables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsVegetables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsVegetables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
