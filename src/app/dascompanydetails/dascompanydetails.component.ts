import { element } from 'protractor';
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-dascompanydetails',
  templateUrl: './dascompanydetails.component.html',
  styleUrls: ['./dascompanydetails.component.css']
})
export class DascompanydetailsComponent {
  displayedColumns = ['id', 'company_name', 'website', 'source','status'];
  @Input() isCompanyDetails: boolean;
  
  exampleDatabase
  dataSource: ExampleDataSource | null;
  headers: any
  constructor(private http: Http) {
    this.exampleDatabase = new ExampleDatabase(this.http);
  }
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150) 
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}


export interface UserData {
  id: string;
  company_name: string;
  source: string;
  website: string;
  status:string;
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }
  headers: any
  result: any
  constructor(private http: Http) {
    this.addUser()
  }

  addUser() {
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/company', 
    { headers: this.headers }).subscribe(response => {
      console.log(response.json());
      this.result = response.json()
      // response.json().forEach(element => {
      //   this.result=element
      // });
      for (var index = 0; index < this.result.length; index++) {
        const copiedData = this.data.slice();
        copiedData.push(this.result[index]);
        this.dataChange.next(copiedData);
      }
    })
  }


  private newFunction(result): UserData {
    // console.log("inside newFunction");
    // console.log(result.company_name);
    return {
      id: result.id,
      company_name: result.company_name,
      source: result.source,
      website: result.website,
      status:result.status
    };
  }
}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: UserData) => {
        let searchStr = (item.company_name + item.website).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() { }
}