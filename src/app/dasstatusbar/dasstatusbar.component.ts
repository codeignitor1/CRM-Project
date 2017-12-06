import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dasstatusbar',
  templateUrl: './dasstatusbar.component.html',
  styleUrls: ['./dasstatusbar.component.css']
})
export class DasstatusbarComponent implements OnInit {

  constructor() { }
  @Input() text: any;
  @Input() labelValue: any;
  
  @Output() clickCompany = new EventEmitter();



  clickedBtn() {
    this.clickCompany.emit();
  }

  ngOnInit() {
  }

}
