import { Routes } from '@angular/router';
import { FormComponent } from "../app/form/form.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
export const routes: Routes = [
    {path:'form-component',component:FormComponent},
    {path:'dashboard-component',component:DashboardComponent},
];
