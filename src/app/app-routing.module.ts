import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { path:"", redirectTo:'administrator', pathMatch:'full'},
  { path:'administrator', component: AdministratorComponent },
  { path:'employee', component: EmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdministratorComponent]
