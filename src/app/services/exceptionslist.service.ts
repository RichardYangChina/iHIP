import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlatformManagementModule } from '../pages/platformmanagement/platformmanagement.module';

@Injectable()
export class ExceptionslistService {
  exceptionslistUrl = 'http://47.100.64.197:8080/hiip-admin/a/esbSysLog/find';

  constructor(private http: HttpClient) { }

  getExceptionslist(pageIndex: number = 0, pageSize: number = 10, sortField: string, sortOrder: string): Observable<{}> {

    let params = new HttpParams()
      .append('offset', `${(pageIndex - 1) * 10}`)
      .append('limit', `${pageSize}`)
      .append('sortName', sortField)
      .append('sortOrder', sortOrder);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };

    return this.http.post(`${this.exceptionslistUrl}`, params, httpOptions);
  }
}
