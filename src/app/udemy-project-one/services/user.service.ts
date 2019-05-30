import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getNames() {
    return this.http.get(`${this.uri}`)
  };
}
