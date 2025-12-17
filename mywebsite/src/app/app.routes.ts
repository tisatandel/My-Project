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
import { FruitsVegetables } from './categories/fruits-vegetables/fruits-vegetables';
import { BakeryCakesDairy } from './categories/bakery-cakes-dairy/bakery-cakes-dairy';
import { DryfruitsOilsMasalas } from './categories/dryfruits-oils-masalas/dryfruits-oils-masalas';
import { HotBeveragesColdBeverages } from './categories/hot-beverages-cold-beverages/hot-beverages-cold-beverages';
import { Snacks } from './categories/snacks/snacks';
import { BeautyHygiene } from './categories/beauty-hygiene/beauty-hygiene';
import { CleaningHousehold } from './categories/cleaning-household/cleaning-household';
import { KitchenGardenPets } from './categories/kitchen-garden-pets/kitchen-garden-pets';
import { EggsMeatFish } from './categories/eggs-meat-fish/eggs-meat-fish';
import { Babycare } from './categories/babycare/babycare';

export const routes: Routes = [
    { path:'home', component:Home},
    { path:'about', component:About},
    { path:'contact', component:Contact},
    { path:'categories', component:Categories,
      children: [
      { path: 'fruits-vegetables', component: FruitsVegetables },
      { path: 'bakery-cakes-dairy', component: BakeryCakesDairy },
      { path: 'dryfruits-oils-masalas', component: DryfruitsOilsMasalas },
      { path: 'hot-beverages-cold-beverages', component:HotBeveragesColdBeverages  },
      { path: 'snacks', component:Snacks  },
      { path: 'beauty-hygiene', component:BeautyHygiene  },
      { path: 'cleaning-household', component:CleaningHousehold },
      { path: 'kitchen-garden-pets', component:KitchenGardenPets  },
      { path: 'eggs-meat-fish', component:EggsMeatFish  },
      { path: 'babycare', component: Babycare },
      ]
},
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
