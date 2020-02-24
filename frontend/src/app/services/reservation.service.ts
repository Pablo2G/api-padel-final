import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';
import  { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  readonly URL_API = 'http://localhost:3001/api/reservation';
  selectedReservation: Reservation;
  reservations: Reservation[];

  constructor(private http: HttpClient){ 
    this.selectedReservation = new Reservation();
  }

  getReservations(){
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        })
    };
    return this.http.get(this.URL_API,httpOptions);
  }
  createReservation(reservation: Reservation){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':localStorage.getItem('token')
      })
  };
    return this.http.post(this.URL_API,reservation,httpOptions);
  }
  editReservation(reservation: Reservation){
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        })
    };
    return this.http.put(this.URL_API+`/${reservation._id}`,reservation,httpOptions);
  }
  deleteReservation(_id: String){
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        })
    };
    return this.http.delete(this.URL_API+`/${_id}`, httpOptions);
  }
}
