import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserData} from '../../../models/interfaces';

@Component({
  selector: 'app-user-performance-gauge',
  templateUrl: './user-performance-gauge.component.html',
  styleUrls: ['./user-performance-gauge.component.scss']
})
export class UserPerformanceGaugeComponent implements OnChanges {

  @Input() userData: UserData;

  canvasWidth = 150;
  needleValue: number;
  centralLabel: string;
  bottomLabel = 'performance';
  options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['sandybrown', 'mediumspringgreen'],
    arcDelimiters: [50],
    rangeLabel: ['0', '100'],
    needleStartValue: 0,
  };

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fixMeta();
    this.setScore();
  }

  fixMeta() {
    for (const meta in this.userData.meta) {
      if (this.userData.meta[meta] < 0) {
        this.userData.meta[meta] = 0;
      }
    }
  }

  setScore() {
    this.needleValue = this.calculatePerformance();
    this.centralLabel = `${this.needleValue}%`;
  }

  calculatePerformance() {
    const num = (this.userData.meta.ups * 0.80) + (this.userData.meta.hearts * 0.20);
    const den = num + this.userData.meta.downs;
    return den > 0 ? Math.round((num / den) * 100) : 0;
  }
}
