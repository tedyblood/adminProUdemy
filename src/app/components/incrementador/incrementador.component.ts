import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  @Input('nombre') leyenda: string;
  @Input() progreso: number;

  @Output('ActualizaValor') cambioValor: EventEmitter<number> = new EventEmitter;

  constructor() {}

  ngOnInit() {
    console.log('leyenda', this.leyenda )
  }

  onChange( e: number ) {

      //let elemeHTML: any = document.getElementsByName('progreso')[0];
      // console.log(elemeHTML.value);

     if (e >= 100 ) {
       this.progreso = 100;
       } else if ( e <= 0 ) {
       this.progreso = 0;
     } else {
        this.progreso = e;
      }
      //elemeHTML.value = Number(this.progreso);
      this.txtProgress.nativeElement.value = this.progreso;
      this.txtProgress.nativeElement.focus();

    }


  cambiarValor(valor: number){

    if(this.progreso >= 100 && valor >  0){
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor <  0 ){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
