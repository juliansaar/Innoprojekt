import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError, Observable, throwError } from 'rxjs';

export interface Config {
  url: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  imgs: any;
  postResponse: any;
  successResponse: any;
  uploadedImage: Blob;
  postId : number;
  constructor(private http: HttpClient) { }

  getKudos() {
    //return this.perform('get', '/kudos');
    return this.http.get('http://localhost:5000/kudos')
  }
  
  getImagesDichte(){
    return this.http.get<any>('http://localhost:5000/fetchimg/dichte');
}
getImagesKaffee(){
  return this.http.get<any>('http://localhost:5000/fetchimg/kaffee');
}
  createDataStory(name: string,length: number,fragerunde: number,adressat: string,stand: string,datensatz: string,zeitraum_von: Date,zeitraum_bis: Date,messungsintervall: string,einträge: number){
    var body = {datastory : name, length : length,fragerunde : fragerunde,adressat: adressat,stand: stand, datensatz : datensatz,zeitraum_von: zeitraum_von, zeitraum_bis: zeitraum_bis,messungsintervall: messungsintervall,einträge: einträge}
    this.http.post<any>('http://localhost:5000/createds',body).subscribe(data => {
      name
    })
    //this.http.post<any>('http://localhost:5000/createds', { title: 'Angular POST Request Example' }).subscribe(data => {
      //  this.postId = data.id;
    //})
  }

  imageUploadAction(uploadedImage : Blob, filename: string) : void {
    const imageFormData = new FormData();
    imageFormData.append('image', uploadedImage,filename);

    this.http.post('http://localhost:5000/image', imageFormData, {observe: 'response' })
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


  async perform(method, resource, data = {}) {

    const url = `http://localhost:5000${resource}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Config>(url, httpOptions)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
    
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
        return throwError(() => `Error Code: ${error.status}`);
  }
}

