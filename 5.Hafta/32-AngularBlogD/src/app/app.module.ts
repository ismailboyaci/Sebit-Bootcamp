import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http'

import { BaseService } from './services/base.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewBlogComponent,
    UpdateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
