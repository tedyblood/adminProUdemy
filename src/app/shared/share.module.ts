import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from '../pages/no-page-found/no-page-found.component';



@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations:[
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
        NoPageFoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent,
        NoPageFoundComponent
    ]
})
export class ShareModule { }