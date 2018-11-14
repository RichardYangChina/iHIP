import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webAPICaller } from './apicaller';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuUrl = "../../assets/mock/role.json";

  constructor(private http: webAPICaller) { }

  getMenuData(): Observable<any> {
    return this.http.getData(`${this.menuUrl}`);
  }
}
