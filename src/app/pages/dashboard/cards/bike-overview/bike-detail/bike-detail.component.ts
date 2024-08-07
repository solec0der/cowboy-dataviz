import { Component, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeInfo } from '../../../../../../../functions/src/model/bike-info';
import { Profile } from '../../../../../../../functions/src/model/profile';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss'],
})
export class BikeDetailComponent {
  public readonly bikeInfo$!: Observable<BikeInfo | undefined>;
  public readonly profile$!: Observable<Profile | undefined>;

  public essentials: ListItem[] = [];
  public stats: ListItem[] = [];
  public positionItems: ListItem[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      bikeInfo$: Observable<BikeInfo | undefined>;
      profile$: Observable<Profile | undefined>;
    }
  ) {
    this.bikeInfo$ = data.bikeInfo$;
    this.profile$ = data.profile$;

    this.profile$.subscribe((profile) => {
      console.log(profile?.updatedAt || 'N/A');
    });

    this.bikeInfo$.subscribe((bikeInfo) => {
      this.essentials = [
        {
          title: 'Battery',
          value: `${bikeInfo?.batteryStateOfCharge || 'N/A'}% (${this.getRemainingRange(bikeInfo!!)} km)`,
          dataType: 'string',
        },
        {
          title: 'Auto Unlock',
          value: String(bikeInfo?.settings.autoUnlock || false),
          dataType: 'boolean',
        },
        {
          title: 'Theft Alerts',
          value: String(bikeInfo?.settings?.theftAlerts || false),
          dataType: 'boolean',
        },
        {
          title: 'Crash Detection',
          value: String(bikeInfo?.settings?.crashDetection || false),
          dataType: 'boolean',
        },
      ];

      this.stats = [
        {
          title: 'Model',
          value: bikeInfo?.model.name || 'N/A',
          dataType: 'string',
        },
        {
          title: 'Name',
          value: bikeInfo?.nickname || 'N/A',
          dataType: 'string',
        },
        {
          title: 'Mac Address',
          value: bikeInfo?.macAddress || 'N/A',
          dataType: 'string',
        },
        {
          title: 'Serial Number',
          value: bikeInfo?.serialNumber || 'N/A',
          dataType: 'string',
        },
        {
          title: 'Firmware',
          value: bikeInfo?.firmwareVersion || 'N/A',
          dataType: 'string',
        },
        {
          title: 'Total Distance',
          value: `${Math.floor(bikeInfo?.totalDistance || 0)} km`,
          dataType: 'string',
        },
        {
          title: 'Activation Date',
          value: bikeInfo?.activatedAt || 'N/A',
          dataType: 'date',
        },
      ];

      this.positionItems = [
        {
          title: 'Address',
          value: bikeInfo?.position.address || 'N/A',
          dataType: 'string',
        },
        {
          title: 'Latitude',
          value: String((bikeInfo?.position.latitude || 0).toFixed(10)),
          dataType: 'string',
        },
        {
          title: 'Longitude',
          value: String((bikeInfo?.position.longitude || 0).toFixed(10)),
          dataType: 'string',
        },
        {
          title: 'Elevation',
          value: String(Math.floor(bikeInfo?.position.elevation || 0) + ' m'),
          dataType: 'string',
        },
      ];
    });
  }

  public getRemainingRange(bikeInfo: BikeInfo): number {
    const autonomy = bikeInfo.autonomies.find((autonomy) => autonomy.rideMode === bikeInfo.lastRideMode);
    if (!autonomy) {
      return -1;
    }
    return Math.floor(autonomy.fullBatteryRange * (bikeInfo.autonomy / 100));
  }
}

interface ListItem {
  title: string;
  value: string;
  dataType: 'string' | 'date' | 'boolean';
}
