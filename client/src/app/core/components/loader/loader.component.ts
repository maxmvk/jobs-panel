import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGlobalLoading } from '../../store/core.selectors';
import { CoreState } from '../../store/core.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  private readonly store: Store<CoreState> = inject(Store);

  public readonly globalLoading = this.store.selectSignal(selectGlobalLoading);
}