import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  url : string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
   }
  
  getDatastory(name: string) : Observable<any>{
    var body = {datastory: name}
    console.log('Sent request with name:' + name)
    return this.http.post<any>(`${this.url}/fetchDatastory`,body)
  }

  getStatus(druck: number,leck: number){
    var body = {druck: druck,leck:leck}
    console.log('Sent request with name:' + druck + leck)
    return this.http.post<any>(`${this.url}/data`,body)
  }

  getDatastoryNames(){
    return this.http.get<any>(`${this.url}/fetchNotAnsweredDatastories`);
  }
  getDoneDataStories(){
    return this.http.get<any>(`${this.url}/fetchDoneDatastories`);
  }

  createDataStory(body) {
   return this.http.post<any>(`${this.url}/createds`, body);
  }

}