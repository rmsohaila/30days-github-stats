import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IndexComponent,
    DetailComponent,
    NotFound404Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
