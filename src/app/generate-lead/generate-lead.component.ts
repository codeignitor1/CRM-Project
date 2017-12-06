import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-generate-lead',
  templateUrl: './generate-lead.component.html',
  styleUrls: ['./generate-lead.component.css']
})
export class GenerateLeadComponent {
  animal: string;
  name: string;
  headers: any
  leadData: any
  constructor(public dialog: MatDialog, private http: Http, private router : Router) { }
 
  openDialog(): void {
    let dialogRef = this.dialog.open(ContactDialog, {
      width: '250px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'contact-dialog',
  templateUrl: 'contact-dialog.html',
})
export class ContactDialog {

  constructor(
    public dialogRef: MatDialogRef<ContactDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("closed");
    
  }
  onSubmitClick(result)
  {
console.log("result",result);
  }
}