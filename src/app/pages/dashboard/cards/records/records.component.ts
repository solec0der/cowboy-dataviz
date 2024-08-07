import { Component } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent {
  public readonly weekdayTopSpeeds: WeekdayTopSpeed[] = [
    { weekday: 'Mon', topSpeed: 50, isWeeklyRecord: false },
    { weekday: 'Tue', topSpeed: 55, isWeeklyRecord: false },
    { weekday: 'Wed', topSpeed: 80, isWeeklyRecord: true },
    { weekday: 'Thu', topSpeed: 65, isWeeklyRecord: false },
    { weekday: 'Fri', topSpeed: 70, isWeeklyRecord: false },
    { weekday: 'Sat', topSpeed: 75, isWeeklyRecord: false },
    { weekday: 'Sun', topSpeed: 60, isWeeklyRecord: false },
  ];

  public readonly heights: number[] = [];


  constructor() {
    this.calculateHeights();
  }
  public calculateHeights(): void {
    this.weekdayTopSpeeds.forEach((weekdayTopSpeed) => {
      this.heights.push(this.getHeight(weekdayTopSpeed.topSpeed));
    });
  }


  public getHeight(topSpeed: number): number {
    const parentContainer = document.getElementById('records');
    const heightInPx = parentContainer?.clientHeight || 100;

    const weeklyRecord = this.getWeeklyRecord();

    if (topSpeed === weeklyRecord) {
      return heightInPx;
    }

    return (topSpeed / weeklyRecord) * heightInPx;
  }

  private getWeeklyRecord(): number {
    return this.weekdayTopSpeeds.filter((weekdayTopSpeed) => weekdayTopSpeed.isWeeklyRecord)[0].topSpeed;
  }
}




export interface WeekdayTopSpeed {
  weekday: string;
  topSpeed: number;
  isWeeklyRecord: boolean;
}