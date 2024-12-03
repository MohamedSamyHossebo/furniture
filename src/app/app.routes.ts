import { Routes } from '@angular/router';
import { HomeComponent } from './products/components/home/home.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //TODO doing routes
    { path: "**", redirectTo: "home", pathMatch: "full" }
];
