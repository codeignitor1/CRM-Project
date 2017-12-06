import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  id1: any
  headers: any
  company: any=[];
  constructor(private http: Http, private route: Router, private router: ActivatedRoute,
    private companyService:CompanyService) {
      
    this.router.paramMap.subscribe(
      params => {
        this.id1 = params.get('id'); 

        this.companyService.getCompany(this.id1).subscribe(response =>{
          this.company = response
          console.log("company",this.company)
        })

        

         
        // console.log(this.id1);
       /*  this.headers = new Headers(); */
        // console.log(localStorage.getItem('token'));
      /*   this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token')); */
       /*  this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/company/' + this.id1, { headers: this.headers })
          .subscribe(response => {
            // console.log("ddd");
            this.company = response.json();
            console.log(this.company);
          } */
          
      }
    ) 
  }

  ngOnInit() {
  }

}
