import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientTableComponent} from './clients/client-table/client-table.component';
import {ClientManageComponent} from './clients/client-manage/client-manage.component';

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientTableComponent},
  {path: 'clients/manage', component: ClientManageComponent},
  {path: 'clients/manage/:id', component: ClientManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
