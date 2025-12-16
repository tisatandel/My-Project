import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOrders } from './supplier-orders';

describe('SupplierOrders', () => {
  let component: SupplierOrders;
  let fixture: ComponentFixture<SupplierOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
