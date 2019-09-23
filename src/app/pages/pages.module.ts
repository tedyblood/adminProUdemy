import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from "@angular/common";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { ChartsModule } from 'ng2-charts';

import { ShareModule } from '../shared/share.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoComponent } from '../components/grafico/grafico.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ConsumeApiComponent } from './consumeapi/consume-api.component';
import { FiltroHtmlPipe } from '../pipe/filtro-html.pipe';
import { ConsumeApiDosComponent } from './consume-api-dos/consume-api-dos.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ConsumeApiComponent,
        FiltroHtmlPipe,
        ConsumeApiDosComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        ShareModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        HttpClientModule,
        CommonModule
    ]
})

export class PagesModule {}