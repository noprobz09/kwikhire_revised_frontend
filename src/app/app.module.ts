import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injector  } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CompanyLayoutComponent } from './components/layout/company-layout/company-layout.component';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './shared/accordion';
//import { CardComponent } from './shared/card/card.component';
import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';
import { MenuItems } from './shared/menu-items/menu-items';


@NgModule({
  declarations: [
    AppComponent,
    CompanyLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    //CardComponent,
    //MadeWithLoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule.forRoot(),    
  ],
  entryComponents: [
    //CardComponent,
    //MadeWithLoveComponent
  ],
  providers: [MenuItems],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private injector: Injector) {
  //   // const customElement = createCustomElement(CardComponent, { injector });
  //   // customElements.define('app-card', customElement);
  //   const customElement = createCustomElement(MadeWithLoveComponent, { injector });
  //   customElements.define('made-with-love', customElement);
  // }

  // ngDoBootstrap() { }
}
