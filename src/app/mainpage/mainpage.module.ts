import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageRoutingModule } from './mainpage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MainpageRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class MainpageModule { }
