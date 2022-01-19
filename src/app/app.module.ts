import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { MenuComponent } from './main/menu/menu.component';
import { ConsultaComponent } from './solicitacao/consulta/consulta.component';
import { LoginComponent } from './registro/login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuTopComponent } from './main/menu-top/menu-top.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConsultaComponent,
    LoginComponent,
    HomeComponent,
    MenuTopComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
