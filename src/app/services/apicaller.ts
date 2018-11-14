import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, range, timer, of, throwError } from 'rxjs';
import { retryWhen, zip, map, mergeMap, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token'
    })
};

const httpOptionsForForm = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class webAPICaller {
    constructor(private http: HttpClient) { }

    getData(url: string): Observable<any> {
        httpOptions.headers =
            httpOptions.headers.set('Authorization', this.getToken());

        return this.http.get<any>(url, httpOptions)
            .pipe(
                this.backoff(3, 250),
                catchError(this.handleError)
            );
    }

    postDataNormal(url: string, payLoad: any): Observable<any> {
        httpOptions.headers =
            httpOptions.headers.set('Authorization', this.getToken());

        return this.http.post<any>(url, payLoad, httpOptions)
            .pipe(
                this.backoff(3, 250),
                catchError(this.handleError)
            );
    }

    postDataForm(url: string, payLoad: any): Observable<any> {
        httpOptionsForForm.headers =
            httpOptionsForForm.headers.set('Authorization', this.getToken());

        return this.http.post<any>(url, payLoad, httpOptionsForForm)
            .pipe(
                this.backoff(3, 250),
                catchError(this.handleError)
            );
    }

    updateData(url: string, payLoad: any): Observable<any> {
        httpOptions.headers =
            httpOptions.headers.set('Authorization', this.getToken());

        return this.http.put<any>(url, payLoad, httpOptions)
            .pipe(
                this.backoff(3, 250),
                catchError(this.handleError)
            );
    }

    deleteData(url: string, payLoad: any): Observable<any> {
        httpOptions.headers =
            httpOptions.headers.set('Authorization', this.getToken());

        return this.http.delete<any>(url, httpOptions)
            .pipe(
                this.backoff(3, 250),
                catchError(this.handleError)
            );
    }

    private backoff(maxTries, ms) {
        return pipe(
            retryWhen(attempts => range(1, maxTries)
                .pipe(
                    zip(attempts, (i) => i),
                    map(i => i * i),
                    mergeMap(i => timer(i * ms))
                )
            )
        );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);

            // return an observable with a user-facing error message
            return throwError([]);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);

            // return an observable with a user-facing error message
            return throwError([]);
        }
    }
    private getToken(): string {
        return sessionStorage.getItem('Token');
    }

    private setToken(token: string): void {
        sessionStorage.setItem('Token', token);
    }
}
