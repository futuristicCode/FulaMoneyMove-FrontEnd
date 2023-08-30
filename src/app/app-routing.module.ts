import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
