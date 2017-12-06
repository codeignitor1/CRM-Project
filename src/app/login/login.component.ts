import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
//import { FormControl, Validators } from '@angular/forms';
//const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private http: Http, private router: Router,private route:ActivatedRoute) { }
  login(credentials) {
    // console.log("login credentials");
    console.log(credentials);
    this.http.post('http://thrymrcms.com/api/thrymr_crm/authenticate', credentials).subscribe(response => {
      console.log(response.json());
      let result = response.json();
      if (result.status == "success") {
        localStorage.setItem('token', result.access_token)
        localStorage.setItem('Username',credentials.email)
        console.log(credentials.email);
      //  let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
      //  console.log("returnUrl",returnUrl);
        this.router.navigate(['/dashboard'])
      }
    })
  }
  ngOnInit() {
  }
}
