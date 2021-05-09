import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientTableComponent} from './clients/client-table/client-table.component';
import {ClientManageComponent} from './clients/client-manage/client-manage.component';
import {CategoryTableComponent} from './category/category-table/category-table.component';
import {CategoryManageComponent} from './category/category-manage/category-manage.component';
import {PropertyTableComponent} from './properties/property-table/property-table.component';
import {PropertyManageComponent} from './properties/property-manage/property-manage.component';
import {ReservationTableComponent} from './reservations/reservation-table/reservation-table.component';
import {ReservationManageComponent} from './reservations/reservation-manage/reservation-manage.component';
import {PropertiesByCategoryTableComponent} from './properties-by-category-table/properties-by-category-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientTableComponent},
  {path: 'clients/manage', component: ClientManageComponent},
  {path: 'clients/manage/:id', component: ClientManageComponent},
  {path: 'categories', component: CategoryTableComponent},
  {path: 'categories/manage', component: CategoryManageComponent},
  {path: 'categories/manage/:id', component: CategoryManageComponent},
  {path: '', redirectTo: '/properties', pathMatch: 'full'},
  {path: 'properties', component: PropertyTableComponent},
  {path: 'properties/manage', component: PropertyManageComponent},
  {path: 'properties/manage/:id', component: PropertyManageComponent},
  {path: '', redirectTo: '/reservations', pathMatch: 'full'},
  {path: 'reservations', component: ReservationTableComponent},
  {path: 'reservations/manage', component: ReservationManageComponent},
  {path: 'reservations/manage/:id', component: ReservationManageComponent},
  {path: 'properties/byCategory/:id', component: PropertiesByCategoryTableComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
