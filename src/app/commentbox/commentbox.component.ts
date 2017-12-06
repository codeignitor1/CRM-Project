import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
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
    headers: any
    commentArray: any
    leadid1:any
    commentId:any
    commentjson:any
    commentrelationresult:any
    selectedValue:string;
    commentsofleadid:any
    constructor(private http: Http,private route:Router,private router:ActivatedRoute) { }
    
    ngOnInit() {
      this.router.paramMap.subscribe(params => {
        console.log(params.get ('id'));
        this.leadid1 = params.get ('id');
    });
        this.getComments();
    }
  addComment(data) {
    // console.log("add comments", data);
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    // console.log(formData);
    this.headers = new Headers();
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
    this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/comment',formData, { headers: this.headers }).subscribe(response => {
      console.log(response.json(), "response");
      this.commentjson=response.json();
      this.commentId=this.commentjson.data.id;
     let leadCommentData= {
      rowId1: this.leadid1,
      rowId2: this.commentId
      }
      this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/lead/relations/lead_comment',leadCommentData, { headers: this.headers })
      .subscribe(response=>{
          this.commentrelationresult=response.json();
          if(this.commentrelationresult.status=="success")
          {
            const formData=new FormData()
            let commentData={
                status:this.selectedValue
            }
            Object.keys(commentData).forEach(key => formData.append(key, commentData[key]));
            this.http.post('http://thrymrcms.com/api/thrymr_crm/crm/lead/'+ this.leadid1, formData, { headers: this.headers })
            .subscribe(leadresponse => {
              console.log("commentDetails",leadresponse.json());
              
            })
          }
          this.getComments();
        })
      })
  }
 
  private getComments() {
    this.headers = new Headers();
    this.headers.append('X-ACCESS-TOKEN', localStorage.getItem('token'));
    this.http.get('http://thrymrcms.com/api/thrymr_crm/crm//lead/'+this.leadid1+'?load_children=true',{headers:this.headers})
    .subscribe(response => {
      this.commentArray = response.json();
      this.commentsofleadid=this.commentArray[0].lead_comment
      console.log(this.commentsofleadid, "response");

    });
  }

}
