export type JobStatus = 'open' | 'in_progress' | 'closed';

export interface IJob {
  id: string;
  title: string;
  company: string;
  description: string;
  status: JobStatus;
  location: string;
  createdAt: string;
}