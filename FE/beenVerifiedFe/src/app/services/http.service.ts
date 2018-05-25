import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    private server = "http://localhost:3000";


    constructor(private http: Http) { }

    get(url): any {
        return this.http.get(this.server + url)
            .pipe(map((res: Response) => res.json()))
    }

    post(url, body): any {
        return this.http.post(this.server + url, body)
            .pipe(map((res: Response) => res.json()))
    }

    someMethod() {
        return 'Hey!';
    }
}