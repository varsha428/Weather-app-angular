import { provideRouter, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';

export const routes: Routes = [ // ✅ Ensure 'routes' is exported
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
];
