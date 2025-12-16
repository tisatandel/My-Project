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
import { GreenLab } from './green-lab/green-lab';

export const routes: Routes = [
    { path:'home', component:Home},
    { path:'about', component:About},
    { path:'contact', component:Contact},
    { path:'categories', component:Categories},
    { path:'grocery', component:Grocery},
    { path:'facebook', component:Facebook},
    { path:'instragram', component:Instragram},
    { path:'twitter', component:Twitter}, 
    { path:'green-lab', component:GreenLab},   
    {
    path: 'grocery-hub',
    loadChildren: () => import('./grocery-hub/grocery-hub.routes').then(m => m.groceryhubRoutes)
  },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
