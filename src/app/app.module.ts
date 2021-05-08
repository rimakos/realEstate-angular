import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';
import { ClientManageComponent } from './clients/client-manage/client-manage.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryTableComponent } from './category/category-table/category-table.component';
import { CategoryManageComponent } from './category/category-manage/category-manage.component';
import {PropertyManageComponent} from './properties/property-manage/property-manage.component';
import {PropertyTableComponent} from './properties/property-table/property-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTableComponent,
    ClientManageComponent,
    CategoryTableComponent,
    CategoryManageComponent,
    ClientManageComponent,
    PropertyManageComponent,
    PropertyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
