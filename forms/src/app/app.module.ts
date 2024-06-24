import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule } from '@angular/forms';


const routes: Routes =[{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
