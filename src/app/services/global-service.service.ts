import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }

  getMovieList(){
    let results =  localStorage.getItem('data');
    if(results){
      return JSON.parse(results);
    }else{return null; }
  }

  fetchCategories(){
    return this.category;
  }

  updateData(dataRecieved){
    localStorage.clear();
    localStorage.setItem('data',JSON.stringify(dataRecieved));
  }

  category = ['Horror','Action','Kids & Family','Documentary','Sci-Fi','Romance','Anime','Comedy']
}
