import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient ) { }

  public getArtworkUser (){
    return this.httpClient.get('https://api.artic.edu/api/v1/artworks?limit=27');
    //https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg//
  }
  public getUserPrf (ind:any){
    return this.httpClient.get(`https://api.artic.edu/api/v1/artworks/${ind}`)
  }
}
