import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  constructor(private httpClient: HttpClient) { }

 getAlbums() {
    return  this.httpClient.get(`${environment.endPoint}/albums`);
  }

  getPhotos(){
    return  this.httpClient.get(`${environment.endPoint}/photos`);
  }
}

