import {HttpInterceptorFn} from '@angular/common/http';
import {inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {EMPTY} from 'rxjs';

export const browserOnlyInterceptor: HttpInterceptorFn = (req, next) => {

  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    return next(req);
  }

  console.warn(`⛔️ Richiesta bloccata durante prerender: ${req.url}`);

  return EMPTY;

};
