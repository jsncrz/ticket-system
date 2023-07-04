import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTicketPieComponent } from './monthly-ticket-pie.component';

describe('MonthlyTicketPieComponent', () => {
  let component: MonthlyTicketPieComponent;
  let fixture: ComponentFixture<MonthlyTicketPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyTicketPieComponent]
    });
    fixture = TestBed.createComponent(MonthlyTicketPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
