import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {



  constructor(public apiService: ApiService ) {
   }

  public infoArray:any = [];
  public infoObj:any = [];
  ngOnInit(): void {
    this.getArtworkUser();
  }
  getArtworkUser () {
  this.apiService.getArtworkUser().subscribe(data =>{
    this.infoObj = data;
    this.infoArray = this.infoObj.data;
    console.log(data)
  }, (error)=>{
    console.log(error);
  })

}
}
