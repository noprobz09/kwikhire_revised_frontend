import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { FormsModule }  from '@angular/forms';
import { CompanyRoutes } from './company.routing';
import { InterviewListsComponent } from './interview/lists/lists.component';
import { InterviewCreateComponent } from './interview/create/create.component';
import { QuestionsCreateComponent } from './questions/create/create.component';
import { QuestionsListsComponent } from './questions/lists/lists.component';
import { CardComponent } from '../../shared/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CompanyRoutes) 
  ],
  declarations: [
    InterviewListsComponent,
    InterviewCreateComponent,    
    QuestionsListsComponent,
    QuestionsCreateComponent,
    CardComponent
  ],
  entryComponents: [
    CardComponent
  ],
})
export class CompanyModule {}
