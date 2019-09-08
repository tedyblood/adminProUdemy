import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent


  ],
  imports: [
    PagesModule,
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
