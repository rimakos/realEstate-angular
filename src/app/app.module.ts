import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';
import { ClientManageComponent } from './clients/client-manage/client-manage.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoryTableComponent } from './category/category-table/category-table.component';
import { CategoryManageComponent } from './category/category-manage/category-manage.component';
import {PropertyManageComponent} from './properties/property-manage/property-manage.component';
import {PropertyTableComponent} from './properties/property-table/property-table.component';
import {ReservationTableComponent} from './reservations/reservation-table/reservation-table.component';
import {ReservationManageComponent} from './reservations/reservation-manage/reservation-manage.component';
import { PropertiesByCategoryTableComponent } from './properties-by-category-table/properties-by-category-table.component';
import { AgentTableComponent } from './agent/agent-table/agent-table.component';
import { AgentManageComponent } from './agent/agent-manage/agent-manage.component';
import { BannerTableComponent } from './banner/banner-table/banner-table.component';
import { BannerManageComponent } from './banner/banner-manage/banner-manage.component';
import { PostTableComponent } from './blog/post-table/post-table.component';
import { PostManageComponent } from './blog/post-manage/post-manage.component';
import {PageListComponent} from './page/page-list/page-list.component';
import {PageManageComponent} from './page/page-manage/page-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTableComponent,
    ClientManageComponent,
    CategoryTableComponent,
    CategoryManageComponent,
    ClientManageComponent,
    PropertyManageComponent,
    PropertyTableComponent,
    ReservationTableComponent,
    ReservationManageComponent,
    PropertiesByCategoryTableComponent,
    BannerTableComponent,
    BannerManageComponent,
    AgentTableComponent,
    AgentManageComponent,
    PostTableComponent,
    PostManageComponent,
    PageListComponent,
    PageManageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
