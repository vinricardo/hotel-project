import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLodgingOfersComponent } from './card-lodging-ofers.component';

describe('CardLodgingOfersComponent', () => {
  let component: CardLodgingOfersComponent;
  let fixture: ComponentFixture<CardLodgingOfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLodgingOfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLodgingOfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
