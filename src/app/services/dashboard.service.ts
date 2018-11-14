import { Injectable } from '@angular/core';
import { webAPICaller } from './apicaller';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  systemsUrl = "../../assets/mock/systems.json";

  constructor(private http: webAPICaller) { }

  getSystemsData(): Observable<any> {
    return this.http.getData(`${this.systemsUrl}`);
  }
}
