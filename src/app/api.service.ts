import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = environment.apiUrl;

  public subscribe(email: string): Observable<any> {
    return this.http.post(this.apiUrl + '/subscribe', {email: email});
  }

  public testCall(): Observable<any> {

    console.log('Test call', this.apiUrl);

    return this.http.get(this.apiUrl + '/');
  }
}
