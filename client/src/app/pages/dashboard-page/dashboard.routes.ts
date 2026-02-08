import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { JobsService } from '../../features/jobs/services/jobs.service';
import { JOBS_FEATURE_KEY } from '../../features/jobs/store/jobs.selectors';
import { jobsReducer } from '../../features/jobs/store/jobs.reducer';
import * as jobsEffects from '../../features/jobs/store/jobs.effects';
import { DashboardPage } from './dashboard.page';

export const dashboardRoutes: Routes = [
  { 
    path: '',
    component: DashboardPage,
    providers: [
      JobsService,
      provideState(JOBS_FEATURE_KEY, jobsReducer),
      provideEffects(jobsEffects),
    ],
  },
];
