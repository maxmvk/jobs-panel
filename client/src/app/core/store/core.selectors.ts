import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.reducer';

export const CORE_FEATURE_KEY = 'CORE';

export const selectCoreState = createFeatureSelector<CoreState>(CORE_FEATURE_KEY);

export const selectGlobalLoading = createSelector(selectCoreState, (state: CoreState) => state.pendingRequests > 0);