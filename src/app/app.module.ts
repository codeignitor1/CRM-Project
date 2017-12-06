import { LogService } from './log.service';
import { CompanyService } from './company.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
  
} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DasstatusbarComponent } from './dasstatusbar/dasstatusbar.component';
import { DasleadstatusComponent } from './dasleadstatus/dasleadstatus.component';
import { DascompanydetailsComponent } from './dascompanydetails/dascompanydetails.component';
import { DascalendarComponent } from './dascalendar/dascalendar.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AddcompanyDetailsComponent } from './addcompany-details/addcompany-details.component';
import { GenerateLeadComponent, ContactDialog } from './generate-lead/generate-lead.component';
import { LeadDataComponent } from './lead-data/lead-data.component';
import { LeadContactComponent } from './lead-contact/lead-contact.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { LeadTableComponent } from './lead-table/lead-table.component';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { FollowupComponent, FollowupDialog } from './followup/followup.component';
import { HttpModule } from '@angular/http';
import { LeadComponent } from './lead/lead.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';
import { LeadService } from './lead.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DasstatusbarComponent,
    DasleadstatusComponent,
    DascompanydetailsComponent,
    DascalendarComponent,
    AddcompanyComponent,
    AddcompanyDetailsComponent,
    GenerateLeadComponent,
    LeadDataComponent,
    LeadContactComponent,
    ContactDialog,
    CompanyComponent,
    CompanyDetailsComponent,
    LeadTableComponent,
    CommentboxComponent,
    FollowupComponent,
    LeadComponent,
    LeadDetailComponent,
    FollowupDialog,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  AngularFontAwesomeModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  FormsModule,
  HttpModule,
  MatStepperModule,
  ReactiveFormsModule,
  CalendarModule.forRoot(),
  RouterModule.forRoot([
    {path:'',component:LoginComponent},
    {path:'dashboard', component:DashboardComponent,canActivate:[LogService]},
    {path:'addcompany',component:AddcompanyComponent,canActivate:[LogService]},
    {path:'generateLead',component:GenerateLeadComponent,canActivate:[LogService]},
    {path:'company/:id',component:CompanyComponent,canActivate:[LogService]},
    {path:'lead/:id',component:LeadComponent,canActivate:[LogService]}
  ])
  
  ],
  entryComponents: [
    ContactDialog,FollowupDialog
  ],    
  providers: [LeadService,CompanyService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
