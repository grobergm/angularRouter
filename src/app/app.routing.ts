import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketComponent } from './market/market.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'market',
    component: MarketComponent
  },
  {
   path: 'albums/:id',
   component: AlbumDetailComponent
 }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
