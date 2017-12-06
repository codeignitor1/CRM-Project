import { Router } from '@angular/router';
import { LogService } from './../log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private log:LogService,private router:Router) { }

  ngOnInit() {
    }
    logoutUser(){
      if(localStorage.getItem('token'))
      this.logout();
    }
    logout(){
      this.log.logout().subscribe(response=>{
        if(response)
        {
            this.router.navigate([''])
        }
      })
    }
}