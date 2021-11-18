import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpService } from '../../Module/HttpService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HTTPRequestComponent implements OnInit {
  title = 'Article by Jeetendra';
  posts: any;
  prime_json = "https://www.adata.com/upload/prime/version.json";
  prime_json2 = "/upload/prime/version.json";
  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient, private httpService: HttpService) {
    // this.config = {
    //   heroesUrl: data.heroesUrl,
    //   textfile:  data.textfile,
    //   date: data.date,
    // }

    this.getPosts();

  }

  ngOnInit() {


  }
  configUrl = './config.json';
  // getConfig() {
  //   return this.http.get<Config>(this.configUrl);
  // }
  getPosts() {
    // this.httpService.getPosts().subscribe(
    //   (response) => {
    //     console.log('%c getPosts', 'color:rgb(255,75,255,1)', response);
    //     this.posts = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    // this.httpService.getURL(this.prime_json).subscribe(
    //   (response) => {
    //     console.log('%c getURL', 'color:rgb(255,75,255,1)', response);
    //     //this.posts = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    var httpOptions = {
      headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "www.adata.com",
          'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent',
          "Access-Control-Max-Age": "86400",
          
      })
  };


    this.http.get(this.prime_json).subscribe(x=> {
      console.log('%c zzzzzzzzzzz', 'color:rgb(255,75,255,1)', x)

    }) ;

    this.http.get(this.prime_json2).subscribe(x=> {
      console.log('%c zzzzzzzzzzz', 'color:rgb(255,75,255,1)', x)

    }) ;


    



    // var getURL = this.http.get(this.prime_json).subscribe(res => {
    //   // console.log('%c subscribe)getURL', 'color:rgb(255,75,255,1)', getURL);
    //   // console.log('%c subscribe)getURL', 'color:rgb(255,75,255,1)', res);
    // });
    // console.log('%c subscribe)getURL', 'color:rgb(255,75,255,1)', getURL);

    //return this.http.get(this.prime_json);


  }


  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  // }
}
