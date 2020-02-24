import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { UserService } from 'src/app/services/users.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public reservas;
  public identity = null;
  public token = null;
  constructor(private reservation: ReservationService, private user: UserService) { }

  ngOnInit() {
    this.identity = this.user.getIdentity();
    this.token = this.user.getToken();
    this.getReservas();
  }

  getReservas(){
    this.reservation.getReservations()
    .subscribe(res=> {
      this.reservas = res;
    });
  }
}
