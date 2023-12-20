import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing/landing.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    data: { title: 'Landing' }
  },
  {
    path: 'navigation',
    component: NavigationComponent,
    data: { title: 'Navigation' }
  },

  { path: '**', redirectTo: 'landing' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
