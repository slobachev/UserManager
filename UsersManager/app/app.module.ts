import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { HomeComponent } from './Components/home.component';
import { UserService } from './Service/user.service';
import { UserComponent } from './Components/user.component';
import { UserFilterPipe } from './filter/user.pipe';
import { SearchComponent } from './shared/search.component';
import AppErrorHandler from './shared/errorhandler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {ManageUser} from './Components/manageuser.component';
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule, BrowserAnimationsModule, MaterialModule, MdNativeDateModule],
    declarations: [AppComponent, HomeComponent, UserComponent, UserFilterPipe, SearchComponent, ManageUser],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, { provide: APP_BASE_HREF, useValue: '/' }, UserService],
    entryComponents: [ManageUser],
    bootstrap: [AppComponent]
})

export class AppModule { }