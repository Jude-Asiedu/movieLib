import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieData } from 'src/app/interfaces/movie-interface';
import { GlobalServiceService } from 'src/app/services/global-service.service';
import * as moment from 'moment';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() tableRecords: MovieData[];
  @Input() keywords: string;
  details:MovieData;
  dateString:string;
  movieForm:FormGroup;
  categories:string[];
  moment = moment;
  orderString:string = '';
  desc:boolean =true;

  constructor(
    config:NgbModalConfig,
    private modals:NgbModal,
    private fb:FormBuilder,
    private globalService:GlobalServiceService,
    private alert:SweetAlertService) {
    config.backdrop = 'static';
    config.keyboard = false
    }

  ngOnInit() {
    this.fetchAllCategories();
  }

  getMaxdate(){
    return new Date(this.moment().format( 'YYYY MM DD h:mm:ss'));
  }

async   fetchAllCategories(){
    let results =   await this.globalService.fetchCategories();
    this.categories = results;

  }

  orderList(colName:string){
    this.desc = !this.desc;
    this.orderString = colName;
  }

  initforms(){
    this.movieForm = this.fb.group({
      id:[this.details.id],
      title:[this.details.title,Validators.required],
      category:[this.details.category,Validators.required],
      release_year:[this.details.release_year,Validators.required],
    });
  }

  openModal(content:any,data:MovieData,type:string,size:string){
    this.details = data;
    this.initforms();
    this.modals.open(content,{'centered':type == 'edit','size':size});

  }

  removedetails(){
    this.tableRecords.splice(this.tableRecords.indexOf(this.details),1);
    this.modals.dismissAll();
    this.alert.showSuccessMessage('Success!',`${this.details.title} has been deleted.`);
    this.globalService.updateData(this.tableRecords);
  }

  updateDetails(){
    let payload = this.movieForm.value;
    const selectedRecord = this.tableRecords
    .find((results: any) => {
      return results.id === this.details.id
    });
    const index = this.tableRecords.indexOf(selectedRecord);
    this.tableRecords[index] = payload;
    this.modals.dismissAll();
    this.alert.showSuccessMessage('Success!',`${this.details.title} has been updated.`);
    this.globalService.updateData(this.tableRecords);
  }
}
