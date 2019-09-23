import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consume-api-dos',
  templateUrl: './consume-api-dos.component.html',
  styleUrls: ['./consume-api-dos.component.css']
})
export class ConsumeApiDosComponent implements OnInit {
 apiURL = 'https://www.jluislopez.es/wp-json/wp/v2/posts?_embed&per_page=2';
  constructor( private _http: HttpClient) {
    
    let obs = new Observable ( observa => {
      observa.next(this._http.get(this.apiURL));
      // observa.complete();
    })

    obs.subscribe(
      data => console.log('DATA', data)
    )

  }

  ngOnInit() {
  }

  

}
