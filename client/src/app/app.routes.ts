import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Analysis } from './pages/analysis/analysis';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/register/register';
import { Account } from './pages/account/account';
import { Canva } from './pages/canva/canva';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: 'account', component: Account },
  { path: 'canva', component: Canva },
  { path: 'analysis', component: Analysis },
];
