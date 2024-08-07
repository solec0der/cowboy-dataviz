import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BikeOverviewComponent } from './cards/bike-overview/bike-overview.component';
import { MatIconModule } from '@angular/material/icon';
import { BatteryComponent } from './cards/battery/battery.component';
import { LocationComponent } from './cards/location/location.component';
import { RecordsComponent } from './cards/records/records.component';
import { BikeDetailComponent } from './cards/bike-overview/bike-detail/bike-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DashboardComponent,
    BikeOverviewComponent,
    BatteryComponent,
    LocationComponent,
    RecordsComponent,
    BikeDetailComponent,
  ],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, MatIconModule, MatDialogModule, MatSlideToggleModule],
})
export class DashboardModule {}
