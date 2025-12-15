import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instragram } from './instragram';

describe('Instragram', () => {
  let component: Instragram;
  let fixture: ComponentFixture<Instragram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instragram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instragram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
