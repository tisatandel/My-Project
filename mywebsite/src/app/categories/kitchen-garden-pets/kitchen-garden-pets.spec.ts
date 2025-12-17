import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenGardenPets } from './kitchen-garden-pets';

describe('KitchenGardenPets', () => {
  let component: KitchenGardenPets;
  let fixture: ComponentFixture<KitchenGardenPets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenGardenPets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenGardenPets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
