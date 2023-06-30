import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAddDialogComponent } from './ticket-dialog.component';

describe('TicketAddDialogComponent', () => {
  let component: TicketAddDialogComponent;
  let fixture: ComponentFixture<TicketAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketAddDialogComponent]
    });
    fixture = TestBed.createComponent(TicketAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
