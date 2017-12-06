import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dascalendar',
  templateUrl: './dascalendar.component.html',
  styleUrls: ['./dascalendar.component.css']
})
export class DascalendarComponent implements OnInit {
  view: string = 'month';
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events = [];
  activeDayIsOpen: boolean = false;  
  constructor() { }

  ngOnInit() {
  }

}
