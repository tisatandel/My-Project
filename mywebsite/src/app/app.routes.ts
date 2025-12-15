import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Categories } from './categories/categories';
import { Grocery } from './grocery/grocery';
import { GroceryHub } from './grocery-hub/grocery-hub';
import { Facebook } from './facebook/facebook';
import { Instragram } from './instragram/instragram';
import { Twitter } from './twitter/twitter';

export const routes: Routes = [
    { path:'home', component:Home},
    { path:'about', component:About},
    { path:'contact', component:Contact},
    { path:'categories', component:Categories},
    { path:'grocery', component:Grocery},
    { path:'grocery-hub', component:GroceryHub},
    { path:'facebook', component:Facebook},
    { path:'instragram', component:Instragram},
    { path:'twitter', component:Twitter},    
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
