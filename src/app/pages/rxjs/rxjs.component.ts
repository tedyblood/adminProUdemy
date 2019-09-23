import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
    
  suscrip: Subscription;

  constructor() {
    
    this.suscrip = this.regresaObservable()
    .pipe(
      map( resp => resp ),
      filter( (valor, index) => {
        // console.log('filter: ', valor, index);
        if ( (valor % 2)===1){
          return true;
        }else{
          return false;
        }
        
      })
      // retry(1)

    )
    .subscribe( 
      numero => { console.log('sub ', numero)},
      error => console.log('Error en el obs ', error),
      () => console.log('El observador terminó')
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.suscrip.unsubscribe();
    console.log('La Página se va a cerrar')
  }

  regresaObservable(): Observable<any>{
    return new Observable ( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval ( () => {
          contador +=1;
          observer.next( contador );
          // if ( contador === 3 ){
          //   clearInterval( intervalo);
          //   observer.complete();
          // }
          // if (contador === 2){
          //   observer.error('Auxilio');
          //   clearInterval( intervalo );
          // }
      },  500 );
    });
  }

}  
