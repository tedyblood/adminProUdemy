import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


     this.contrarTres().then(
      (e) => console.log('Exito', e)
      )
      .catch( error => console.log('Error en la promesa', error));
   }

  ngOnInit() {
  }

  contrarTres() : Promise<boolean>{

      //Intervalo de tiempo 3 segundos
    return new Promise((resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () =>{
      contador +=1;
      console.log(contador);
      if (contador===3){
        resolve('OK!');
        //reject('Simplemente un error');
        clearInterval(intervalo);
      }
    },1000);
  });
  }

}
