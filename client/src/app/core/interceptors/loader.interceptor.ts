import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs/operators';
import { httpRequestFinished, httpRequestStarted } from '../store/core.actions';
import { CoreState } from '../store/core.reducer';
import { SKIP_GLOBAL_LOADING } from '../http/http-context.tokens';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const store: Store<CoreState> = inject(Store);

  if (!req.context.get(SKIP_GLOBAL_LOADING)) {
    store.dispatch(httpRequestStarted());

    return next(req).pipe(
      finalize(() => store.dispatch(httpRequestFinished()))
    );
  }

  return next(req);
};