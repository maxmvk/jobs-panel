import { createReducer, on } from '@ngrx/store';
import { httpRequestFinished, httpRequestStarted } from './core.actions';

export interface CoreState {
  pendingRequests: number;
}

export const initialState: CoreState = {
  pendingRequests: 0,
};

export const coreReducer = createReducer(
  initialState,
  on(httpRequestStarted, state => ({
    ...state,
    pendingRequests: state.pendingRequests + 1,
  })),

  on(httpRequestFinished, state => ({
    ...state,
    pendingRequests: Math.max(0, state.pendingRequests - 1),
  })),
);