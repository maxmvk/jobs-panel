import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IJob } from '../models';

export enum JOB_ACTION_TYPES {
  GET_JOBS = 'GET_JOBS',
  GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS',
  GET_JOBS_FAILURE = 'GET_JOBS_FAILURE',
}

export const getJobs = createAction(
  JOB_ACTION_TYPES.GET_JOBS
);

export const getJobsSuccess = createAction(
  JOB_ACTION_TYPES.GET_JOBS_SUCCESS,
  props<{ jobs: IJob[] }>()
);

export const getJobsFailure = createAction(
  JOB_ACTION_TYPES.GET_JOBS_FAILURE,
  props<{ error: HttpErrorResponse }>()
);