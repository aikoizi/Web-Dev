import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes'; // или './app/routes' в зависимости от названия файла

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));
