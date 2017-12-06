import { CompanyService } from './../company.service';
import { Http, Headers } from '@angular/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-data',
  templateUrl: './lead-data.component.html',
  styleUrls: ['./lead-data.component.css']
})
export class LeadDataComponent implements OnInit {
  @Input() isLeads: boolean = false;
  @Input() values: any;
  @ViewChild('leadForm') form

  sourceArray = ["Cold Call",
    "Existing Customer",
    "Self Generated",
    " Employee",
    "Partner",
    "Conference",
    "Word of Mouth",
    "Reference"];

  statusArray = ["New",
    "Pitched - Non Contact",
    "Pitched - Right Contact",
    "Try for Meeting",
    "Meeting Fixed",
    "Follow Up",
    "No Response",
    "Proposal Due",
    "Proposal Sent ",
    "MSA Sent ",
    "Negotiating",
    "Closed",
    "Not Interested"];

  amountArray = ["$1000", "$2000", "$3000","$4000","$5000"];
  company: any
  headers: any
  leadData:any
  id:any
  company_name:any
   cId:any
  constructor(private http: Http,private router:Router,private companyService:CompanyService,
    private route:ActivatedRoute ) {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log("companyId",this.id);
        
        this.company_name=localStorage.getItem('companyname');
        console.log("Lead details ng on init");
        console.log(this.company_name,">>>>>>>>>>")
        this.cId=localStorage.getItem("companyid");
        

      });
   }

  ngOnInit() {
    this.headers = new Headers();
    // console.log(localStorage.getItem('token'));
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/company', { headers: this.headers })
      .subscribe(response => {
        // console.log("ddd");
        this.company = response.json();
        console.log(this.company);
      })
    this.
      form.control.
      valueChanges.
      subscribe(response => {
        this.values = response
      });
  }
  generateLead(lead) {
    let companyId = lead.company
    
    delete lead.company;
     console.log(lead);
    const formData = new FormData();
    Object.keys(lead).forEach(key => formData.append(key, lead[key]));
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
    this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/lead', formData, { headers: this.headers })
      .subscribe(response => {
        this.leadData = response.json();
        console.log(this.leadData);

        let leadId = this.leadData.data.id;
        let companyLeadData = {
          rowId1: companyId,
          rowId2: leadId
        }
        // console.log("ids.........");
        // console.log(leadId);
        // console.log(companyId);

        this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/company/relations/company_leads', 
        companyLeadData, { headers: this.headers }).
          subscribe(response => {
            console.log("response for companyLead data");
            console.log(response.json());

            if(response.status == 200){
              this.router.navigate(['dashboard'])
            }
          })


      }
      )
  }
}
