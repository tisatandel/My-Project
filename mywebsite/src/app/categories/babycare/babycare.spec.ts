import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babycare } from './babycare';

describe('Babycare', () => {
  let component: Babycare;
  let fixture: ComponentFixture<Babycare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Babycare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Babycare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
