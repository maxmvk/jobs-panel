import { createAction } from '@ngrx/store';

export enum HTTP_REQUEST_TYPES {
  HTTP_REQUEST_STARTED = 'HTTP_REQUEST_STARTED',
  HTTP_REQUEST_FINISHED = 'HTTP_REQUEST_FINISHED',
}

export const httpRequestStarted = createAction(
  HTTP_REQUEST_TYPES.HTTP_REQUEST_STARTED
);

export const httpRequestFinished = createAction(
  HTTP_REQUEST_TYPES.HTTP_REQUEST_FINISHED
);