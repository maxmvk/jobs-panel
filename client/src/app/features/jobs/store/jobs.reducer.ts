import { createReducer, on } from '@ngrx/store';
import { getJobs, getJobsFailure, getJobsSuccess, selectJob } from './jobs.actions';
import { IJob } from '../models';

export interface JobsState {
  jobs: IJob[];
  selectedJobId: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: JobsState = {
  jobs: [],
  selectedJobId: null,
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
    selectedJobId: jobs.length ? jobs[0].id : null,
    loading: false,
    error: null,
  })),
  on(getJobsFailure, (state: JobsState) => ({
    ...state,
    loading: false,
    error: "Error getting Jobs",
  })),
  on(selectJob, (state: JobsState, { jobId }) => ({
    ...state,
    selectedJobId: jobId,
  }))
);