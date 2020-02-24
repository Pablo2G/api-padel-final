import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service'
import { Reservation } from '../../models/reservation';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationService]
})
export class RerservationComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getReservations();
  }

  addReservation(form: NgForm) {
    if (form.value._id) {
      this.reservationService.editReservation(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Reservation updated successfully' });
          this.getReservations();
        });
    } else {
      this.reservationService.createReservation(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Reservation save successfully' });
          this.getReservations();
        });
    }
  }
  
  getReservations() {
    this.reservationService.getReservations()
      .subscribe(res => {
        this.reservationService.reservations = res as Reservation[];
      })
  }

  editReservation(reservation: Reservation) {
    this.reservationService.selectedReservation = reservation;
  }

  deleteReservation(_id: String) {
    if (confirm('Are your sure you want delete it?')) {
      this.reservationService.deleteReservation(_id)
        .subscribe(res => {
          this.getReservations();
          M.toast({ html: 'Reservation deleted successfully' });
        })
    }
  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.reservationService.selectedReservation = new Reservation();
    }
  }
}
