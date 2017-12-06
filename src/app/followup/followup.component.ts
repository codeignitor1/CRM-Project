import { element } from 'protractor';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FollowupComponent implements OnInit {

  id1: any;
  result: any;
  headers: any;
  view: string = 'month';
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  // events = [];
  activeDayIsOpen: boolean = false;
  constructor(private dialog: MatDialog, private http: Http, private route: Router, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(
      params => {
        this.id1 = params.get('id');
      });
    // console.log(this.events[0].start, " -------------------- ");

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
      // alert("day clicked")
    }
  }


  ngOnInit() {
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm//lead/' + this.id1 + '?load_children=true', { headers: this.headers })
      .subscribe(response => {
        let jsonResponse = response.json();
        this.result = jsonResponse[0].lead_followups

        for (let index = 0; index < this.result.length; index++) {
          let element = this.result[index].date;
          // console.log("date", element)
          let time = new Date().getDate() - new Date(element).getDate();
          let sub = subDays(startOfDay(new Date()), time)
          console.log(time, "date diff");
          this.events[index].start = sub
          this.events[index].title = this.result[index].title
          this.events[index].color = colors.red

        }
        console.log(this.events);
        
        // this.events = jsonResponse[0].lead_followups
        // console.log("followup length ", this.result[0].lead_followups);

      });


  }

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'A 3 day event',
      color: colors.red,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'A 3 day event',
      color: colors.red,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'A 3 day event',
      color: colors.red,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'A 3 day event',
      color: colors.red,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      title: 'A 3 day event',
      color: colors.red,
    },
     {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
    }
    /* {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
    }, */
  ]

  openDialog(): void {
    let dialogRef = this.dialog.open(FollowupDialog,{
      width: '250px',
      data: { leadId: this.id1 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}

@Component({
  selector: 'contact-dialog',
  templateUrl: './followupDailog.html',
})
export class FollowupDialog {
  headers: any;
  // false:any=false
  id1: any;
  followupID: any;
  locale = new FollowupComponent(this.dialog, this.http, this.route, this.router)
  constructor(
    public dialogRef: MatDialogRef<FollowupDialog>, private dialog: MatDialog, private http: Http, private route: Router, private router: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    /*  this.router.paramMap.subscribe(
       params => {
         this.id1 = params.get('id');
         console.log("id1 lead id ", data.leadId)
       }); */
    // console.log("dailog data-------------", data);

  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("closed");

  }
  submit(result) {
    // console.log("result---------", result);
    // console.log("result---------", result);

    const formData = new FormData();
    Object.keys(result).forEach(key => formData.append(key, result[key]));
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
    this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/followup', formData, { headers: this.headers })
      .subscribe(response => {
        console.log("response", response.json());
        this.followupID = response.json().data.id;
        // console.log(this.followupID);
        // console.log("lead id ........", this.data.leadId);
        let leadFollowUpData = {
          rowId1: this.data.leadId,
          rowId2: this.followupID
        }
        console.log("relation", leadFollowUpData)
        this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/lead/relations/lead_followups', leadFollowUpData, { headers: this.headers }).
          subscribe(response => {
            console.log(response.json());
            // this.locale.getTheData();
          })
      });
    this.dialogRef.close();
  }
}