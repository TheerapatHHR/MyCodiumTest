import { EasyModule } from './easy/easy.module';
import { CheckPipe } from './todo/check.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { MediumComponent } from './medium/medium.component';
import { FirstpageComponent } from './firstpage/firstpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    CheckPipe,
    MediumComponent,
    FirstpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EasyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
