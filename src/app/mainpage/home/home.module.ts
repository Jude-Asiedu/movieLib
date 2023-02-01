import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { TableComponent } from './homepage/table/table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { AddMovieComponent } from './add-movie/add-movie.component';



@NgModule({
  declarations: [HomepageComponent, FooterComponent, TableComponent, AddMovieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    HomeRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class HomeModule { }
