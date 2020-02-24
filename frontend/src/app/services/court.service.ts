import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Court } from '../models/court';
import  { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  readonly URL_API = 'http://localhost:3001/api/court';
  selectedCourt: Court;
  courts: Court[];

  constructor(private http: HttpClient){ 
    this.selectedCourt = new Court();
  }
  getCourts(){
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        })
    };
    return this.http.get(this.URL_API,httpOptions);

 // return this.http.post(this.url + 'users/register', params, httpOptions);
  }
  createCourt(court: Court){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':localStorage.getItem('token')
      })
  };
    return this.http.post(this.URL_API,court,httpOptions);
  }
  editCourt(court: Court){
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        })
    };
    return this.http.put(this.URL_API+`/${court._id}`,court,httpOptions);
  }
  deleteCourt(_id: String){
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token')
        })
    };
    return this.http.delete(this.URL_API+`/${_id}`, httpOptions);
  }
}
