import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PlatformManagementModule } from '../pages/platformmanagement/platformmanagement.module';

@Injectable({
  providedIn: 'root'
})
export class RoleselectService {
  roleSelectUrl = "http://47.100.64.197:8080/hiip-portal/user/405";

  constructor(private http: HttpClient) { }

  getRoleSlectData(): Observable<any> {
    return this.http.get<any>(`${this.roleSelectUrl}`).pipe(
      map(data => data.datas)
    );
  }
}
