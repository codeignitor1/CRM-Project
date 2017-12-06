import { CompanyService } from './../company.service';
import { Http, Headers } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css']
})
export class LeadDetailComponent implements OnInit {
  headers: any
  leadData: any
  id: any
  companyname:any;

 
  constructor(private http: Http, private router: ActivatedRoute,private companyservice:CompanyService) {

          
        //this.companyservice.getCompany(this.comid);

   
   this.companyname=localStorage.getItem('companyname');
   console.log("Lead details ng on init",this.companyname);
      this.router.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log("id is",this.id);
 
      
      });
   }

  ngOnInit() {
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
    // console.log(this.id);
    
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/lead/' + this.id + '?load_children=true', { headers: this.headers })
    .subscribe(response => {
      this.leadData = response.json();
      // console.log("_______________________________");
      console.log(this.leadData[0]);
      // console.log("_______________________________");
      })
  }

}
