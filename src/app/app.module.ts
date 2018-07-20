import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SignalRModule, SignalRConfiguration} from 'ng2-signalr';

export function createConfig(): SignalRConfiguration {
const c = new SignalRConfiguration;
c.hubName = 'FMCGHub';
c.url = 'http://localhost/FMCG.SL';
c.logging = true;

return c;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SignalRModule.forRoot(createConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
