import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobsState } from './jobs.reducer';

export const JOBS_FEATURE_KEY = 'jobs';

export const selectJobsState = createFeatureSelector<JobsState>(JOBS_FEATURE_KEY);

export const selectJobs = createSelector(selectJobsState, (state: JobsState) => state.jobs);
export const selectJobsLoading = createSelector(selectJobsState, (state: JobsState) => state.loading);
export const selectJobsError = createSelector(selectJobsState, (state: JobsState) => state.error);

export const selectSelectedJobId = createSelector(selectJobsState, (state) => state.selectedJobId);