import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLodgingAvailableComponent } from './card-lodging-available.component';

describe('CardLodgingAvailableComponent', () => {
  let component: CardLodgingAvailableComponent;
  let fixture: ComponentFixture<CardLodgingAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLodgingAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLodgingAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
