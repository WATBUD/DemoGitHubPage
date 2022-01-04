import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    //"Access-Control-Allow-Origin": "http://localhost:4200",'rejectUnauthorized': 'false'
    public httpOptions = {
        headers: new HttpHeaders({
            "Access-Control-Allow-Origin": "www.adata.com",
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent',
            "Access-Control-Max-Age": "86400",
            
        })
    };

    constructor(private http: HttpClient) { }

    getPosts(URL) {
        return this.http.get(URL);
    }


    getURL(URL) {
        var rstarget=this.http.get(URL, this.httpOptions);
        console.log('%c rstarget', 'color:rgb(255,75,255,1)', rstarget);

        return rstarget;  
        //return this.http.get(URL);
    }

    noOptionToGetURL(URL) {
        var NoOptionToGetURL=this.http.get(URL);
        console.log('%c NoOptionToGetURL', 'color:rgb(255,75,255,1)', NoOptionToGetURL);
        return NoOptionToGetURL;  
    }
    getData(URL) { 
        this.http.get(URL).subscribe(x=> console.log(x)) ;
    }

    // public getBackendData(
    //     URL): Observable<any> {
    //     //const getURL = URL;
    //       return this.http.get<any>(URL, this.httpOptions);  
    // }

}