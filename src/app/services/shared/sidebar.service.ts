import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url:'/dashboard' },
        { titulo: 'Progress', url:'/progress' },
        { titulo: 'Gráficas', url:'/grafica1' },
        { titulo: 'Promesas', url:'/promesas' },
        { titulo: 'API', url:'/consumeapi' },
        { titulo: 'RXJS', url:'/rxjs' },
        
      ]
    }
  ]

  constructor() { }
}
