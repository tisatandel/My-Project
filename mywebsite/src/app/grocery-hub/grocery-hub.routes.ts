import { Route, Routes } from "@angular/router";
import { Admin } from "./admin/admin";
import { Customer } from "./customer/customer";
import { Supplier } from "./supplier/supplier";

export const routes: Routes = [
    {path:'admin', component:Admin},
    {path:'customer', component:Customer},
    {path:'supplier', component:Supplier},
];
    