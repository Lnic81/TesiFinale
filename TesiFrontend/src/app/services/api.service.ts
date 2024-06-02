import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  //get all nations
  fetchNazioni(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}nazioni`);
  }

  //get all comuniItaliani
  fetchComuniItaliani(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}comuniItaliani`);
  }

  //get all provincie
  fetchProvincia(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}provincia`);
  }

  //registrate a user
  registrateUser(user: any): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}registrazione`,
      user
    );
  }
}
