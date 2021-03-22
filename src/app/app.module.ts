import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CropComponent } from './crop/crop.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CropComponent,
    FertilizerComponent,
    DiseasesComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
