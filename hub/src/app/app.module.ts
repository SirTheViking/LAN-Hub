import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './modules/front-page/front-page.component';
import { FrontFormComponent } from './components/front-form/front-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FrontFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
