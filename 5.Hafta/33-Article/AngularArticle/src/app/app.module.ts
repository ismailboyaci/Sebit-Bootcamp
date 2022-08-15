import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Article Module
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

//Components
import { HeaderComponent } from './header/header.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { HomeComponent } from './home/home.component';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Services
import { BaseService } from './services/base.service';
import { ViewArticleComponent } from './view-article/view-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateArticleComponent,
    HomeComponent,
    ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularEditorModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
