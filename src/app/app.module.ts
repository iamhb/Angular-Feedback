import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCheckComponent } from './login-check/login-check.component';
import { QuestionModuleComponent } from './question-module/question-module.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SubjectMenuComponent } from './admin-menu/menu-options/subject-menu/subject-menu.component';
import { FacultyMenuComponent } from './admin-menu/menu-options/faculty-menu/faculty-menu.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginCheckComponent,
    QuestionModuleComponent,
    AdminModuleComponent,
    AdminMenuComponent,
    SubjectMenuComponent,
    FacultyMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
