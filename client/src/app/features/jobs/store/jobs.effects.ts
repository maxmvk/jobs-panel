import { inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";
import { JobsService } from "../services/jobs.service";
import { getJobs, getJobsFailure, getJobsSuccess } from "./jobs.actions";

export const getJobsEffect = createEffect(
  (
    actions$ = inject(Actions),
    jobsService = inject(JobsService)
  ) =>
    actions$.pipe(
      ofType(getJobs),
      switchMap(() =>
        jobsService.getJobs().pipe(
          map(jobs => getJobsSuccess({ jobs })),
          catchError(error => of(getJobsFailure({ error })))
        )
      )
    ),
  { functional: true }
);