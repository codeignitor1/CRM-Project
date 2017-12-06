import { LeadService } from './../lead.service';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Http,Headers } from '@angular/http';
@Component({ 
  selector: 'app-dasleadstatus',
  templateUrl: './dasleadstatus.component.html',
  styleUrls: ['./dasleadstatus.component.css']
})
export class DasleadstatusComponent implements OnInit {
        headers:any
        result:any
        displayedColumns = ['key','value'];
        dataSource:any 
        count:number=0
        leadstatus:any
        displayData:any[]
  constructor(private http:Http, private leadservice:LeadService) { }

  ngOnInit() {
      this.leadservice.getleads().subscribe(response =>{
       this.displayData= response;
       //console.log("data",this.displayData);
       this.dataSource=new LeadDataSource(this.displayData)
        console.log(this.dataSource)
      })
      
      
    
  
    
    
    /* this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/lead', { headers: this.headers })
      .subscribe(response => {
        this.result = response.json();
        this.dataSource = new LeadDataSource(this.result);
        
      }) */
     
      
  }

}
export interface Element {
  }


export class LeadDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private details:Element[])
  {
    super();
  }
  connect(): Observable<Element[]> {
    console.log("table",this.details)
    return Observable.of(this.details);
  }

  disconnect() {}
}
/* constructor(private details: UserData[]) {
  super();

}
connect(): Observable<UserData[]> {
  // console.log(this.details)
  return Observable.of(this.details);
} */
