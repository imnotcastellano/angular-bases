import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { ProtaModule } from './prota/prota.module';
import { ListModule } from './list/list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, ProtaModule, ListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
