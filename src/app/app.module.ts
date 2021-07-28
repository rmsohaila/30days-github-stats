import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, DetailComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
