import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photoshoot } from '../models/photoshoot';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/photoshoot'; 

@Injectable({
  providedIn: 'root'
})
export class PhotoshootService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Photoshoot[]> {
    return this.http.get<Photoshoot[]>(baseUrl);
  }

  findById(id: any): Observable<Photoshoot> {
    return this.http.get<Photoshoot>(`${baseUrl}/${id}`);
  }

  create(photoshoot: Photoshoot): Observable<any> {
    return this.http.post(baseUrl, photoshoot);
  }

  update(photoshoot: Photoshoot): Observable<any> {
    return this.http.put(baseUrl, photoshoot);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}

