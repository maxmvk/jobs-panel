import { Component } from '@angular/core';
import { JobListComponent } from '../../features/jobs/components/job-list/job-list.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [JobListComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {}
