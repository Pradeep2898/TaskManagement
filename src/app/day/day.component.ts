import {Component, Input} from '@angular/core';

@Component({
  selector: 'day-summary',
  templateUrl: 'src/app/day/day.component.html',
  styleUrls: ['src/app/day/day.css']
})
export class DayComponent {
  @Input() data:any;
  @Input() tasks: number;
}