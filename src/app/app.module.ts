import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { ColorDirective } from './color.directive';
import { TransportPipe } from './transport.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    ColorDirective,
    TransportPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
