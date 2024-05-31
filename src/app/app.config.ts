import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApiEndpointInterceptor } from '../interceptors/api-endpoint.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiEndpointInterceptor,
    multi: true
  },   provideHttpClient(withInterceptorsFromDi(), withFetch())]
};
