import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlatformManagementModule } from '../pages/platformmanagement/platformmanagement.module';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  roleListUrl = "http://47.100.64.197:8080/hiip-portal/a/sso/ssoAuthConf/roleList";

  constructor(private http: HttpClient) { }

  getRoleListData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(`${this.roleListUrl}`, httpOptions);
  }
}
