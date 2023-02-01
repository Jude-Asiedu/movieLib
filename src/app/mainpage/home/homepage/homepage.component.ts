import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movie-interface';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private globalService:GlobalServiceService) { }

  movieListdata :MovieData[];
  singleMovieDetail:MovieData;
  searchString:string;
  totalRecords: string|number;
  isShowDivIf = true;
  spinner:boolean = true;
  keyword:string;
  ngOnInit() {
    this.fetchData();
  }


  async fetchData(){
    try{
      const data = await this.globalService.getMovieList();
      this.movieListdata = data;

    }
    catch(error){ console.log(error);
    }finally{
      this.spinner = false
    }
  }

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

}
