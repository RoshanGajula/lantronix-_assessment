import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppService {
  constructor( private http: HttpClient) { }

  getScripts(): Observable<any>{
    return this.http.get('../assets/scripts-response.json');
  }

  getjobs(): Observable<any>{
    return this.http.get('../assets/jobs-response.json');
  }
}


