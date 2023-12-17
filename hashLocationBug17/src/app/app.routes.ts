import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [];

bootstrapApplication(AppComponent,
    {
      providers: [
        provideRouter(routes, withHashLocation())
      ]
    }
  );