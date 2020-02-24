export class Reservation {
    _id: String;
    user: String;
    court: String;
    date: String;

    constructor(_id = '', user = '', court = '', date= ''){
    this._id = _id;
    this.user = user;
    this.court = court;
    this.date = date;
    }    
}