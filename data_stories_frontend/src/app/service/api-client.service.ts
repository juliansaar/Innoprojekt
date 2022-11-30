import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError, Observable, throwError } from 'rxjs';
import { Datastorymodel } from '../displaydatastory/datastorymodel';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  
  imgs: any;
  postResponse: any;
  successResponse: any;
  uploadedImage: Blob;
  prodEnvironmentUrl : string;
  
  local: 'http://localhost:5000';

  constructor(private http: HttpClient) {
    this.prodEnvironmentUrl = environment.url;
   }
  
  getAll() {
    return this.http.get<any>('http://localhost:5000/fetchds')
  } 
  
  getDatastory(name: string) : Observable<any>{
    var body = {datastory: name}
    console.log('Sent request with name:' + name)
    return this.http.post<any>('http://localhost:5000/fetchDatastory',body)
  }

  getStatus(druck: number,leck: number){
    var body = {druck: druck,leck:leck}
    console.log('Sent request with name:' + druck + leck)
    return this.http.post<any>('http://localhost:5000/data',body)
  }

  getDatastoryNames(){
    return this.http.get<any>('http://localhost:5000/fetchNotAnsweredDatastories');
  }
  getDoneDataStories(){
    return this.http.get<any>('http://localhost:5000/fetchDoneDatastories');
  }
  getImagesDichte() {
    return this.http.get<any>('http://localhost:5000/fetchimg/dichte');
  }

  getImagesKaffee() {
    return this.http.get<any>('http://localhost:5000/fetchimg/kaffee');
  }
  createDataStory(body) {
   return this.http.post<any>('http://localhost:5000/createds', body);
  }
  createFoil(template: string, questions: string[],answers: string[], images: string[] ) {
    var body = {template: template, questions: questions,answers:answers, images:images}
    this.http.post<any>('http://localhost:5000/createfoil', body).subscribe(data => {
      template
    })
  }
  imageUploadAction(uploadedImage: Blob, filename: string): void {
    const imageFormData = new FormData();
    imageFormData.append('image', uploadedImage, filename);

    this.http.post('http://localhost:5000/image', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );

  }
  imageUploadAction2(uploadedImage: any, filename: string): void {
    const imageFormData = new FormData();
    imageFormData.append('images', uploadedImage, filename);

    this.http.post('http://localhost:5000/images', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );

  }
}