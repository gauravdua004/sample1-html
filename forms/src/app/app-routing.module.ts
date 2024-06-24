import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes : Routes =[
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'customer/add',
    component:AddCustomerComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'templateDriven',
    component:TemplateDrivenComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
