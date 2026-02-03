import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { CORE_FEATURE_KEY } from './core/store/core.selectors';
import { coreReducer } from './core/store/core.reducer';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      [CORE_FEATURE_KEY]: coreReducer,
    }),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    provideEffects()
  ]
};
