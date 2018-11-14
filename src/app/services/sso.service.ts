import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SsoService {
  ssoUrl = "../../assets/mock/sso.json";
  newSytemUrl = "../../assets/mock/system.json";

  constructor(private http: HttpClient) { }

  getSSOData(): Observable<any> {
    return this.http.get<any>(`${this.ssoUrl}`).pipe(
      map(data => data.datas.data)
    );
  }

  getNewSystemData(): Observable<any> {
    return this.http.get<any>(`${this.newSytemUrl}`);
  }
}
