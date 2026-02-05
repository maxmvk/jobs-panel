import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { JobsState } from '../../store/jobs.reducer';
import { getJobs } from '../../store/jobs.actions';
import { selectJobs } from '../../store/jobs.selectors';

@Component({
  selector: 'app-job-list',
  imports: [MatListModule, MatCardModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  private readonly store: Store<JobsState> = inject(Store);

  public readonly jobs = this.store.selectSignal(selectJobs);

  public ngOnInit(): void {
    this.store.dispatch(getJobs())
  }
}
