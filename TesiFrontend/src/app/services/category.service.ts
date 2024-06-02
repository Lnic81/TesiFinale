import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Get single category by id
  fetchCategory(token: string, id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.baseUrl}categorie/${id}`, { headers });
  }

  // Get all categories 
  fetchCategories(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.baseUrl}categorie`, { headers });
  }
}
