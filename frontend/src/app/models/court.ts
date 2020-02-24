export class Court {
    _id: String;
    court: String;
    state: boolean;

    constructor(_id = '', court = '', state = false){
    this._id = _id;
    this.court = court;
    this.state = state;
    }    
}