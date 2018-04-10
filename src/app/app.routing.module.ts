import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompanyLayoutComponent } from './components/layout/company-layout/company-layout.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyLayoutComponent,
    //canActivate: [AuthGuard], 
    //canActivateChild: [AuthGuard],
    loadChildren: './components/company/company.module#CompanyModule',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule { }