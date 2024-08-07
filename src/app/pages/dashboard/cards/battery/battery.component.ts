import { Component, Input } from '@angular/core';
import { BikeInfo } from 'functions/src/model/bike-info';
import { Profile } from 'functions/src/model/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
})
export class BatteryComponent {
  @Input('bikeInfo') bikeInfo$!: Observable<BikeInfo | undefined>;
  @Input('profile') profile$!: Observable<Profile | undefined>;

  public getRemainingRange(bikeInfo: BikeInfo): number {
    const autonomy = bikeInfo.autonomies.find((autonomy) => autonomy.rideMode === bikeInfo.lastRideMode);
    if (!autonomy) {
      return -1;
    }
    return Math.floor(autonomy.fullBatteryRange * (bikeInfo.autonomy / 100));
  }

  public getBatteryLevel(bikeInfo: BikeInfo): number {
    return bikeInfo.batteryStateOfCharge;
  }
}
