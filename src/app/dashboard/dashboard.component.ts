import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headers:any
  result:any[]
 companycount:number
  isCompanyDetails: boolean = true;
  isLeads: boolean = false;
  leadcount:number
  click(val ) {
    // console.log("click company dashBoard" , val);
    this.isCompanyDetails = true;
    this.isLeads = false;
    if (val== 5) {
      this.isCompanyDetails = false;
      this.isLeads = true;
    }
   
  }
  
  constructor(private http: Http, private router: Router) { }
  // headers: any
  ngOnInit() {
    this.headers=new Headers()
    this.headers.append('X-ACCESS-TOKEN',localStorage.getItem('token'))
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/company/',{headers:this.headers})
    .subscribe(response=>{
      this.result=response.json()
      this.companycount=this.result.length;
      console.log("companycount",this.companycount);
    })
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/lead/',{headers:this.headers})
    .subscribe(response=>{
      this.result=response.json()
      this.leadcount=this.result.length;
      console.log("leadcount",this.leadcount);
      
    })
  }
  logout(){
    console.log("logout");
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
    // console.log(this.headers);
    this.http.delete("http://thrymrcms.com/api/logout", { headers: this.headers })
      .subscribe(response => {
        console.log(response.json().status)
        if (response.json().status == "success") {
          this.router.navigate([''])
          localStorage.clear()
        }
      })

  }
}
