import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let logToken=localStorage.getItem('token')
    if(logToken)
    {
      return true
    }
    this.router.navigate([''])
    return false
  }
  headers: any
result:any
  constructor(private http:Http,private router:Router) { }

  logout() {
    console.log("logout");
    this.headers = new Headers()
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'))
    // console.log(this.headers);
    return  this.http.delete("http://thrymrcms.com/api/logout",{ headers: this.headers })
      .map(response => {
        console.log(response.json().status)
        if (response.json().status == "success") {
          this.router.navigate([''])
          localStorage.clear()
          return true;
        }
      })

  }

}
