import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { elementsRoutes } from './elements/elements-routing.module';
import { collectionsRoutes } from './collections/collections-routing.module';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideRouter(elementsRoutes),
  provideRouter(collectionsRoutes)]
};
