import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAvailabilityComponent } from './stock-availability.component';

describe('StockAvailabilityComponent', () => {
  let component: StockAvailabilityComponent;
  let fixture: ComponentFixture<StockAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
