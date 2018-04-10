import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CompanyLayoutComponent } from './components/layout/company-layout/company-layout.component';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './shared/accordion';
import { CardComponent } from './shared/card/card.component';

import { MenuItems } from './shared/menu-items/menu-items';


@NgModule({
  declarations: [
    AppComponent,
    CompanyLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule.forRoot(),    
  ],
  providers: [MenuItems],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
