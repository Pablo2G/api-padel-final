import { Component, OnInit } from '@angular/core';
import { CourtService } from '../../services/court.service';
import { Court } from '../../models/court';
import { NgForm} from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.css'],
  providers: [CourtService]
})
export class CourtComponent implements OnInit {

  constructor(private courtService: CourtService) { }

  ngOnInit() {
    this.getCourts();
  }

  addCourt(form: NgForm){

    if(form.value._id){
      this.courtService.editCourt(form.value)
        .subscribe(res =>{
          
          this.resetForm(form);
          M.toast({html: ' update successfull'});
          this.getCourts();
        });

    }else{
      this.courtService.createCourt(form.value)
      .subscribe( res => {
        
        this.resetForm(form);
        M.toast({html: 'Court save successfull'});
        this.getCourts();
      });
    }


  }

  getCourts(){
    this.courtService.getCourts()
      .subscribe(res => {
        this.courtService.courts = res as Court[];
      });
  }

  editCourt(court: Court){
    this.courtService.selectedCourt = court;
  }

  deleteCourt(_id: String){
    if(confirm('Are you Are sure want you delete it?')){
      this.courtService.deleteCourt(_id)
        .subscribe( res =>{
          this.getCourts();
          M.toast({html: 'Court delete successfull'});
        })
    }
  }

  resetForm(form: NgForm){
    if (form) {
      form.reset();
      this.courtService.selectedCourt = new Court();
    }
  }

}
