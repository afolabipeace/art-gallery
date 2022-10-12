import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public apiService:ApiService) { }
  public infoObj:any = {};
  public id:any = '';
  public oneObj:any={};
  public infoArray:any = [];
ngOnInit(): void {
  let id = this.actRoute.snapshot.params['id'];
  this.id=id
  console.log(this.id)
  this.apiService.getUserPrf(this.id).subscribe(data => {
  this.oneObj=data;
   this.infoObj = this.oneObj.data;
   console.log(data);
  //  this.oneObj = this.infoObj.data;
  },
   (error)=>{
  //   console.log(error);
  })

}



// constructor(public actRoute: ActivatedRoute, public apiService:ApiService) { }
// public user :any={};
// ngOnInit(): void {
// let login = this.actRoute.snapshot.params['name'];
// this.apiService.getUserPrf(login).subscribe(data => {
//  this.user = data;
// })

}
