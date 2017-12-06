import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyId:any
  constructor(private companyservice:CompanyService) {
   // this.companyId=companyservice.grtCompanyDetails()
   }

  ngOnInit() {
  }

}
