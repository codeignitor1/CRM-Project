import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcompany-details',
  templateUrl: './addcompany-details.component.html',
  styleUrls: ['./addcompany-details.component.css']
})
export class AddcompanyDetailsComponent implements OnInit {
  headers: any
  username:any
  sourceArray = ["Cold Call",
  "Existing Customer",
  "Self Generated",
  " Employee",
  "Partner",
  "Conference",
  "Word of Mouth",
  "Reference"];
  statusArray=["New",
  "Pitched - Non Contact", 
  "Pitched - Right Contact", 
  "Try for Meeting",
  "Meeting Fixed",
  "Follow Up",
  "No Response",
  "Proposal Due",
  "Proposal Sent", 
  "MSA Sent", 
  "Negotiating", 
  "Closed",
  "Not Interested "]
  constructor(private http: Http, private router : Router) { }

  ngOnInit() {
    this.username=localStorage.getItem('Username')
    console.log(this.username)
  }

  addCompany(company) {
    // console.log(company , "comapnay");
    const formData = new FormData();
    Object.keys(company).forEach(key => formData.append(key, company[key]));
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
    this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/company', formData, { headers: this.headers }).subscribe(response => {
      console.log(response ,"response");
      if(response.status == 200){
      
        this.router.navigate(['dashboard'])
      }
    })

  }
}
