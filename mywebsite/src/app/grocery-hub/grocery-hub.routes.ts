import { Routes } from "@angular/router";
import { Admin } from "./admin/admin";
import { Customer } from "./customer/customer";
import { Supplier } from "./supplier/supplier";
import { GroceryHub } from "./grocery-hub";

export const groceryhubRoutes: Routes = [
    {
    path: '',
    component: GroceryHub,
    children: [
    {path:'admin', component:Admin},
    {path:'customer', component:Customer},
    {path:'supplier', component:Supplier},
    ]
}
];
    