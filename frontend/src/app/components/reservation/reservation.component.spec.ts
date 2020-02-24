import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RerservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: RerservationComponent;
  let fixture: ComponentFixture<RerservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RerservationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RerservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
