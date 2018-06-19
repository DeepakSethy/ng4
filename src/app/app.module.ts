import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import {GetAllPeopleService} from './shared-service/get-all-people.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [GetAllPeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
