import { Component, Input } from '@angular/core';
import { BikeInfo } from 'functions/src/model/bike-info';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { Profile } from '../../../../../../functions/src/model/profile';

@Component({
  selector: 'app-bike-overview',
  templateUrl: './bike-overview.component.html',
  styleUrls: ['./bike-overview.component.scss'],
})
export class BikeOverviewComponent {
  @Input('bikeInfo') bikeInfo$!: Observable<BikeInfo | undefined>;
  @Input('profile') profile$!: Observable<Profile | undefined>;

  constructor(private readonly dialog: MatDialog) {}

  public floor(value: number): number {
    return Math.floor(value);
  }

  public openBikeDetail(): void {
    this.dialog.open(BikeDetailComponent, {
      width: '60%',
      height: '80%',
      data: {
        bikeInfo$: this.bikeInfo$,
        profile$: this.profile$,
      },
    });
  }

  protected readonly open = open;
}
