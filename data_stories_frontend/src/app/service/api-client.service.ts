import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  
  imgs: any;
  postResponse: any;
  successResponse: any;
  uploadedImage: Blob;
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
  getImagesDichte() {
    return this.http.get<any>(`${this.url}/fetchimg/dichte`);
  }

  getImagesKaffee() {
    return this.http.get<any>(`${this.url}/fetchimg/kaffee`);
  }
  createDataStory(body) {
   return this.http.post<any>(`${this.url}/createds`, body);
  }
  createFoil(template: string, questions: string[],answers: string[], images: string[] ) {
    var body = {template: template, questions: questions,answers:answers, images:images}
    this.http.post<any>(`${this.url}/createfoil`, body).subscribe(data => {
      template
    })
  }
  imageUploadAction(uploadedImage: Blob, filename: string): void {
    const imageFormData = new FormData();
    imageFormData.append('image', uploadedImage, filename);

    this.http.post(`${this.url}/image`, imageFormData, { observe: 'response' })
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

    this.http.post(`${this.url}/images`, imageFormData, { observe: 'response' })
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