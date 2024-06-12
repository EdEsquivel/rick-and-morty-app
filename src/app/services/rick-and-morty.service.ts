import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/character?page=${page}`);
  }

  getEpisodes(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/episode?page=${page}`);
  }

  getLocations(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/location?page=${page}`);
  }
}