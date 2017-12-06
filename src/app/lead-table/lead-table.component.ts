import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router'
import { Component, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.css']
})
export class LeadTableComponent {
  displayedColumns = ['title', 'source', 'estimated_amount', 'status'];
  dataSource: ExampleDataSource;
  result: any
  headers: any
  id1: any
  @Input() typeString;
  // @ViewChild('filter') filter: ElementRef;

  constructor(private http: Http, private route: Router, private router: ActivatedRoute) {

  }
 
  ngOnInit() {

    // console.log(this.typeString, "afjklasdjfjl");

    if (this.typeString == 'dashboard') {
      // console.log("entering into dashboard")
      this.headers = new Headers()
      this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
      this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/lead', { headers: this.headers })
        .subscribe(response => {
          this.result = response.json();
          localStorage.removeItem('companyid');
          this.dataSource = new ExampleDataSource(this.result);
        })

    }
    if (this.typeString == 'company') {
      this.router.paramMap.subscribe(
        params => {
          this.id1 = params.get('id');
          let url = 'http://thrymrcms.com/api/thrymr_crm/crm/company/' + this.id1 + '?load_children=true'
          this.headers = new Headers();
          this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
          this.http.get(url, { headers: this.headers })
            .subscribe(response => {
              this.result = response.json()
              console.log(this.result[0].company_leads);
              this.dataSource = new ExampleDataSource(this.result[0].company_leads);
            }
            )
        })
    }
  }
}

export interface UserData {

}

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private details: UserData[]) {
    super();

  }
  connect(): Observable<UserData[]> {
    // console.log(this.details)
    return Observable.of(this.details);
  }

  disconnect() { }
}