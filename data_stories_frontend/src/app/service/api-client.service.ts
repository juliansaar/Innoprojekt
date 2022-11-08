import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError, Observable, throwError } from 'rxjs';
import { Datastorymodel } from '../displaydatastory/datastorymodel';



@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  imgs: any;
  postResponse: any;
  successResponse: any;
  uploadedImage: Blob;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>('http://localhost:5000/fetchds')
  } 
  
  getDatastory(name: string){
    var body = {datastory: name}
    console.log('Sent request with name:' + name)
    return this.http.post<any>('http://localhost:5000/fetchDatastory',body)
  }
  getDatastoryNames(){
    return this.http.get<any>('http://localhost:5000/fetchNames');
  }

  getImagesDichte() {
    return this.http.get<any>('http://localhost:5000/fetchimg/dichte');
  }

  getImagesKaffee() {
    return this.http.get<any>('http://localhost:5000/fetchimg/kaffee');
  }
  createDataStory(name: string, foilnumber: number, fragerunde: number, adressat: string, stand: string, datensatz: string, zeitraum_von: Date, zeitraum_bis: Date, messungsintervall: string, einträge: number, jsonForm: string) {
    var body = { datastory: name, foilnumber: foilnumber, fragerunde: fragerunde, adressat: adressat, stand: stand, datensatz: datensatz, zeitraum_von: zeitraum_von, zeitraum_bis: zeitraum_bis, messungsintervall: messungsintervall, eintraege: einträge, jsonForm: jsonForm }
    this.http.post<any>('http://localhost:5000/createds', body).subscribe(data => {
      name
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
}