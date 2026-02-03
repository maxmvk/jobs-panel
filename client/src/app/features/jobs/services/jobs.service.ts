import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IJob } from '../models';
import { SKIP_GLOBAL_LOADING } from '../../../core/http/http-context.tokens';

@Injectable()
export class JobsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000';

  getJobs(): Observable<IJob[]> {
    return this.http
      .get<IJob[]>(`${this.baseUrl}/jobs`, {
        context: new HttpContext().set(SKIP_GLOBAL_LOADING, true),
      })
      .pipe(map(jobs => jobs ?? []));
  }
}
