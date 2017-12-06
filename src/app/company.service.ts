import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class CompanyService {
headers:any
result:any;
cId:any;
companyname:any;
  constructor(private http:Http) {
    this.headers = new Headers();
    // console.log(localStorage.getItem('token'));
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));

   }
   getCompany(id) {
    console.log("service class ",id);
    return this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/company/'+id, { headers: this.headers })
      .map(response => {
        this.result = response.json();
        console.log(this.result);
        this.cId = this.result[0].id;
        localStorage.setItem("companyid", this.cId);
        this.companyname=this.result[0].company_name      
       // this.cId = this.result[0].id;
        
        console.log(this.companyname);
        localStorage.setItem("companyname",this.companyname);
        return this.result
      })
  }
 /*  getCompany(id) {
    console.log("service class",id);
    return this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/company/'+id, { headers: this.headers })
      .map(response => {
        this.result = response.json();
        console.log(this.result);
        console.log("companyname",this.companyname);
        
        this.cId = this.result[0].id
        return this.result
        
      })
  }


   getCompanyId() {
    return this.cId
  }
  setCompanyId(val) {
    this.cId = val
  }
   
  getCompanyname()
  {
    return this.companyname
  }
  setCompanyname(val)
  {
    this.companyname=val
  }*/
} 
