import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WP } from './consume-api.component';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RestApiService {
    
    apiURL = 'https://www.socialmedia-panama.com/wp-json/wp/v2/posts';
    datosBajados = [];

   
      
}