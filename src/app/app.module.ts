import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, CardComponent, IndexComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
