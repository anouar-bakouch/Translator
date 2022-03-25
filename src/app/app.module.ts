import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeLanguagesComponent } from './components/liste-languages/liste-languages.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateFieldComponent } from './components/translate-field/translate-field.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFound } from './components/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './interceptors/http.interceptor';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListeLanguagesComponent,
    HeaderComponent,
    TranslateFieldComponent,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,  
      useClass : HttpHeadersInterceptor,
      multi : true,
     },
     HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
