import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CropService {

  url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  private cropSource = new BehaviorSubject('');
  currentCropSource$ = this.cropSource.asObservable();

  predictCrop(payload: any): Observable<any> {
    return this.http.post(this.url, payload);
  }

  cropData(data: any): void {
    this.cropSource.next(data);
  }
}
