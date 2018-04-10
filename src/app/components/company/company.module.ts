import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRoutes } from './company.routing';

import { InterviewListsComponent } from './interview/lists/lists.component';
import { InterviewCreateComponent } from './interview/create/create.component';
import { QuestionsCreateComponent } from './questions/create/create.component';
import { QuestionsListsComponent } from './questions/lists/lists.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CompanyRoutes)    
  ],
  declarations: [
    InterviewListsComponent,
    InterviewCreateComponent,    
    QuestionsListsComponent,
    QuestionsCreateComponent
  ]
})
export class CompanyModule { }
