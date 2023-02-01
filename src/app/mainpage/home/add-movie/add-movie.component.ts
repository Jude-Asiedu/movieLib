import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieData } from 'src/app/interfaces/movie-interface';
import { GlobalServiceService } from 'src/app/services/global-service.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import * as short from  'short-uuid';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private location: Location,private fb:FormBuilder,
    private alert:SweetAlertService,
    private globalService:GlobalServiceService,
    ) { }

  movieForm:FormGroup;
  categories:string[];
  tableRecords: MovieData[] =[];
  short = short;


  ngOnInit() {
    this.initForms();
    this.fetchAllCategories();
  }

  goBack(){
    this.location.back();

  }

  initForms(){
    this.movieForm = this.fb.group({
      id:[''],
      title:['',Validators.required],
      category:[null,Validators.required],
      release_year:['',Validators.required],
    });
  }

  async   fetchAllCategories(){
    let results =   await this.globalService.fetchCategories();
    this.categories = results;

  }

  async addNewMovie(){
    let currentId =  this.short.generate();
    let payload = this.movieForm.value;
    payload['id']= currentId;
    try {
      let records  = localStorage.getItem('data');
      if(records){
      this.tableRecords = JSON.parse(records);
      this.tableRecords.unshift(payload);
      this.alert.showSuccessMessage('Success','New movie added');
      this.movieForm.reset();
      this.globalService.updateData(this.tableRecords);
    }else{
      this.tableRecords.unshift(payload);
      this.alert.showSuccessMessage('Success','New movie added');
      localStorage.setItem('data',JSON.stringify(this.tableRecords))
    }
    } catch (error) {
      console.log(error);
    }
  }


}
