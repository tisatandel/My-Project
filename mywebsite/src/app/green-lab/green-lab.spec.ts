import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenLab } from './green-lab';

describe('GreenLab', () => {
  let component: GreenLab;
  let fixture: ComponentFixture<GreenLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
