import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BikeInfo } from 'functions/src/model/bike-info';
import { Profile } from 'functions/src/model/profile';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public readonly userProfile$ = new ReplaySubject<Profile | undefined>();
  public readonly bikeInfo$ = new ReplaySubject<BikeInfo | undefined>();

  constructor(private readonly firestore: AngularFirestore) {
    this.firestore
      .collection<Profile>('profile')
      .valueChanges()
      .subscribe((profiles) => {
        if (profiles.length !== 1) {
          throw new Error('There should be only one profile');
        }
        const profile = profiles[0];
        this.userProfile$.next(profile);
      });

    this.firestore
      .collection<BikeInfo>('bikeInfo')
      .valueChanges()
      .subscribe((bikeInfos) => {
        if (bikeInfos.length !== 1) {
          throw new Error('There should be only one bikeInfo');
        }
        const bikeInfo = bikeInfos[0];
        this.bikeInfo$.next(bikeInfo);
      });
  }
}
