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

  public subscribe(email: string, recaptchaToken: string): Observable<any> {
    return this.http.post(this.apiUrl + '/subscribe', {email: email, recaptchaToken: recaptchaToken});
  }

  public testCall(): Observable<any> {
    return this.http.get(this.apiUrl + '/test-call');
  }
}
