import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryfruitsOilsMasalas } from './dryfruits-oils-masalas';

describe('DryfruitsOilsMasalas', () => {
  let component: DryfruitsOilsMasalas;
  let fixture: ComponentFixture<DryfruitsOilsMasalas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryfruitsOilsMasalas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryfruitsOilsMasalas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
