import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGrocery } from './shop-grocery';

describe('ShopGrocery', () => {
  let component: ShopGrocery;
  let fixture: ComponentFixture<ShopGrocery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGrocery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopGrocery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
