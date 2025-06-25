import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from 'ngx-toastr';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {browserOnlyInterceptor} from './interceptors/browser-only.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideHttpClient(), provideHttpClient(withInterceptors([browserOnlyInterceptor]), withFetch()), provideClientHydration(withEventReplay()), provideAnimations(), provideToastr({
    positionClass: 'toast-top-right',
    timeOut: 4000,
    closeButton: true,
    progressBar: true,
    preventDuplicates: true,
    newestOnTop: true,
  })]
};
