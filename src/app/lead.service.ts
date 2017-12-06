import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class LeadService {
  header:any
  result:any
 count:number=0;
 statusArray:any[]
  
  constructor(private http:Http,private route:Router) { }
  getleads()
  {
    let st1:number=0,
    st2:number=0,st3:number=0,st4:number=0,st5:number=0,st6:number=0,st7:number=0,st8:number=0,st9:number=0,st10:number=0,st11:number=0,st12:number=0,st13:number=0

    this.header=new Headers()
    this.header.append('X-ACCESS-TOKEN',localStorage.getItem('token'))
   return this.http.get('http://thrymrcms.com/api/thrymr_crm/crm/lead',{headers:this.header})
    .map(response=>{
      this.result=response.json();
     for(let i=0;i<this.result.length;i++)
      {
       
         switch(this.result[i].status) { 
          case 'New': { 
             st2++; 
             break; 
          } 
          case 'Try for Meeting':{
            st1++
            break
          }
          case 'Pitched - Non Contact':{
            st3++
            break
          }
          case 'Pitched - Right Contact':{
             st4++
            break
          }
          case 'Meeting Fixed':{
            st5++
            break
          }
          case 'Follow Up':{
             st6++
            break
          }
          case 'MSA Sent':{
             st7++
            break
          }
          case 'Proposal Due':{
            st8++
            break
          }
          case 'No Response':{
             st9++
            break
          }
          case 'Proposal Sent':{
             st10++
            break
          }
          case 'Negotiating':{
             st11++
            break
          }
          case 'Closed':{
             st12++
            break
          }
          case 'Not Interested ' :{
             st13++
            break
          }
          default:{

            break;
          }
       }  
      }
      this.statusArray=[
        {key:'New',value:st2},
      {key:'Try for Meeting',value:st1},
      {key:'Pitched - Non Contact',value:st3},
      {key:'Pitched - Right Contact',value:st4},
      {key:'Meeting Fixed',value:st5},
      {key:'Follow Up',value:st6},
      {key:'MSA Sent',value:st7},
      {key:'Proposal Due',value:st8},
      {key:'No Response',value:st9},
      {key:'Proposal Sent',value:st10},
      {key:'Negotiating',value:st11},
      {key:'Closed',value:st12},
      {key:'Not Interested ',value:st13},
    ]
    console.log("status",this.statusArray);
    return this.statusArray;   
  })
 
  }
}
