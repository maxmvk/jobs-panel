import { createReducer, on } from '@ngrx/store';
import { getJobs, getJobsFailure, getJobsSuccess } from './jobs.actions';
import { IJob } from '../models';

export interface JobsState {
  jobs: IJob[];
  loading: boolean;
  error: string | null;
}

export const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

export const jobsReducer = createReducer(
  initialState,
  on(getJobs, (state: JobsState) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(getJobsSuccess, (state: JobsState, { jobs }) => ({
    ...state,
    jobs,
    loading: false,
    error: null,
  })),
  on(getJobsFailure, (state: JobsState) => ({
    ...state,
    loading: false,
    error: "Error getting Jobs",
  })),
);