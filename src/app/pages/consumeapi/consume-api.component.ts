import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FiltroHtmlPipe } from '../../pipe/filtro-html.pipe'

@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.component.html',
  styles: []
})
export class ConsumeApiComponent implements OnInit {
      
  // apiURL = 'https://www.socialmedia-panama.com/wp-json/wp/v2/posts?_embed&per_page=10';
  num_post: number = 2;
  urlBase = ['https://woodemia.com/',
            'https://socialmedia-panama.com/']
  apiURL = `${this.urlBase[0]}wp-json/wp/v2/posts?_embed&per_page=${this.num_post}`;
  datosBajados = [];

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    this._http.get(this.apiURL).subscribe<WP>(data => {this.datosBajados = data;});
    this.esperarData();

  }

  esperarData(){
    let obs = new Observable ( observer => {
      let contador = 0;
      let intervalo = setInterval ( () => {
          contador +=1;
          observer.next( contador );
          if (  this.datosBajados.length >= 1 ) {
            clearInterval( intervalo);
            observer.complete();
          }
          if (contador === 100){
            observer.error('La data no se asigna');
          }
      },  1000 );
    })
    obs.subscribe( 
      seg => { console.log('Seg ', seg),
                  console.log(this.datosBajados)},
      error => console.log('Error en el obs ', error),
      () => console.log('El observador terminó')
    );
  }
  
}


export interface WP {
      id: number;
      date: string;
      date_gmt: string;
      guid: Guid;
      modified: string;
      modified_gmt: string;
      slug: string;
      status: string;
      type: string;
      link: string;
      title: Guid;
      content: Content;
      excerpt: Content;
      author: number;
      featured_media: number;
      comment_status: string;
      ping_status: string;
      sticky: boolean;
      template: string;
      format: string;
      meta: Meta;
      categories: number[];
      tags: number[];
      yst_prominent_words: number[];
      jetpack_featured_media_url: string;
      jetpack_publicize_connections: any[];
      jetpack_sharing_enabled: boolean;
      jetpack_shortlink: string;
      'jetpack-related-posts': Jetpackrelatedpost[];
      _links: Links;
    }
    
interface Links {
      self: Self[];
      collection: Self[];
      about: Self[];
      author: Author[];
      replies: Author[];
      'version-history': Versionhistory[];
      'predecessor-version': Predecessorversion[];
      'wp:featuredmedia': Author[];
      'wp:attachment': Self[];
      'wp:term': Wpterm[];
      curies: Cury[];
    }
    
interface Cury {
      name: string;
      href: string;
      templated: boolean;
    }
    
interface Wpterm {
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }
    
interface Predecessorversion {
      id: number;
      href: string;
    }
    
interface Versionhistory {
      count: number;
      href: string;
    }
    
interface Author {
      embeddable: boolean;
      href: string;
    }
    
interface Self {
      href: string;
    }
    
interface Jetpackrelatedpost {
      id: number;
      url: string;
      url_meta: Urlmeta;
      title: string;
      date: string;
      format: boolean;
      excerpt: string;
      rel: string;
      context: string;
      img: Img;
      classes: any[];
    }
    
interface Img {
      alt_text: string;
      src: string;
      width: number;
      height: number;
    }
    
interface Urlmeta {
      origin: number;
      position: number;
    }
    
interface Meta {
      spay_email: string;
      jetpack_publicize_message: string;
    }
    
interface Content {
      rendered: string;
      protected: boolean;
    }
    
interface Guid {
      rendered: string;
}
