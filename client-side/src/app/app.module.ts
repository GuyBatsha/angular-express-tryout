import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SearchScreenComponent } from './search-screen/search-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    HttpHeaders
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
