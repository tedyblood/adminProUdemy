import { Route, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ConsumeApiComponent } from './consumeapi/consume-api.component';
import { ConsumeApiDosComponent } from './consume-api-dos/consume-api-dos.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children : [
            {path: 'dashboard',     component: DashboardComponent, data:{ titulo: 'Escritorio'}},
            {path: 'progress',      component: ProgressComponent, data:{ titulo: 'Progress'}},
            {path: 'grafica1',      component: Graficas1Component, data:{ titulo: 'Gráficas'}},
            {path: 'promesas',      component: PromesasComponent, data:{ titulo: 'Promesas'}},
            {path: 'rxjs',      component: RxjsComponent, data:{ titulo: 'RXJS'}},
            {path: 'consumeapi',      component: ConsumeApiComponent, data:{ titulo: 'Laboratorio'}},
            {path: 'api2',      component: ConsumeApiDosComponent, data:{ titulo: 'Laboratorio 2'}},
            {path: 'accountset',      component: AccountSettingsComponent, data:{ titulo: 'Ajustes del tema'}},
            {path: '',              redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );