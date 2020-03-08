import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AnimalComponent } from './components/animal/animal.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { Utils } from './models/utils';
@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ Utils ],
  bootstrap: [AppComponent]
})
export class AppModule { }
